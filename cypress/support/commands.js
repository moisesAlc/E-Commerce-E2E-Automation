import "./graphql";
import "./scandiCart";

/**
 * cy.visit with retries for Cloudflare/origin 502/503/504 on the public demo.
 * Prefers CDN-cacheable URLs (avoid unique query strings on first attempt).
 */
Cypress.Commands.add("visitWithRetry", (url, options = {}, attempt = 1) => {
  const maxAttempts = options.maxAttempts ?? 5;
  const { maxAttempts: _ignored, ...visitOptions } = options;
  const backoffMs = Math.min(12000, 2000 * attempt);

  cy.request({
    url,
    failOnStatusCode: false,
    timeout: visitOptions.timeout ?? 90000,
  }).then((res) => {
    if ([502, 503, 504].includes(res.status) && attempt < maxAttempts) {
      cy.log(
        `visit ${url} → HTTP ${res.status} (tentativa ${attempt}/${maxAttempts}). Retentando…`
      );
      cy.wait(backoffMs);
      return cy.visitWithRetry(url, options, attempt + 1);
    }

    if ([502, 503, 504].includes(res.status)) {
      throw new Error(
        `visit ${url} falhou após ${maxAttempts} tentativas (HTTP ${res.status}). ` +
          "Demo ScandiPWA/Cloudflare instável."
      );
    }

    return cy.visit(url, { ...visitOptions, failOnStatusCode: false });
  });
});

Cypress.Commands.add("acceptCookies", () => {
  cy.get("body").then(($body) => {
    if (/got it/i.test($body.text())) {
      cy.contains(/got it/i).click({ force: true });
    }
  });
});

/**
 * Interact with ScandiPWA custom FieldSelect (native <select> has pointer-events: none).
 */
Cypress.Commands.add("selectScandiOption", (selectId, optionLabel) => {
  cy.get(`select#${selectId}`, { timeout: 30000 }).should("exist").scrollIntoView();

  cy.get(`select#${selectId}`)
    .closest(".FieldSelect, .Field")
    .then(($field) => {
      const $clickable = $field.find(
        ".FieldSelect-Clickable, button.FieldSelect-Clickable, [class*='Clickable']"
      );
      if ($clickable.length) {
        cy.wrap($clickable.first()).click({ force: true });
      } else {
        cy.wrap($field).click({ force: true });
      }
    });

  cy.get("body").then(($body) => {
    const opt = $body
      .find(
        ".FieldSelect-Option, .FieldSelect-Options li, [class*='FieldSelect'] [class*='Option']"
      )
      .filter((i, el) => el.textContent.trim() === optionLabel);

    if (opt.length) {
      cy.wrap(opt.first()).click({ force: true });
    } else {
      // Fallback: force the native select + input/change for Preact listeners.
      cy.get(`select#${selectId}`)
        .select(optionLabel, { force: true })
        .trigger("input", { force: true })
        .trigger("change", { force: true });
    }
  });

  cy.get(`select#${selectId}`).should(($select) => {
    const text = $select.find("option:selected").text().trim();
    expect(text, `select#${selectId} selected label`).to.eq(optionLabel);
  });
});

/**
 * Guest add configurable product via Magento GraphQL (fallback when UI ATC is flaky).
 */
Cypress.Commands.add(
  "addConfigurableToCartGraphql",
  ({ parentSku, sku, qty = 1 }) => {
    cy.window().then((win) => {
      const stored =
        win.localStorage.getItem("guest_quote_id") ||
        win.localStorage.getItem("cart_id") ||
        win.localStorage.getItem("cartId") ||
        win.localStorage.getItem("guest_cart_id");
      return cy.wrap(stored, { log: false });
    }).then((storedCartId) => {
      const ensureCart = storedCartId
        ? cy.wrap(storedCartId)
        : cy
            .gql("mutation { createEmptyCart }", {}, { retries: 2 })
            .then((res) => {
              expect(res.status).to.eq(200);
              const id = res.body?.data?.createEmptyCart;
              expect(id, "createEmptyCart id").to.be.a("string");
              cy.syncScandiCartId(id);
              return cy.wrap(id);
            });

      ensureCart.then((cartId) => {
        const mutation = `
          mutation ($cartId: String!, $parentSku: String!, $sku: String!, $qty: Float!) {
            addConfigurableProductsToCart(
              input: {
                cart_id: $cartId
                cart_items: [{
                  parent_sku: $parentSku
                  data: { quantity: $qty, sku: $sku }
                }]
              }
            ) {
              cart {
                total_quantity
              }
            }
          }
        `;
        cy.gql(
          mutation,
          { cartId, parentSku, sku, qty },
          { retries: 2, timeout: 90000 }
        ).then((res) => {
          // Demo often returns total_quantity OK but errors resolving cart.items.product.
          const qtyTotal =
            res.body?.data?.addConfigurableProductsToCart?.cart?.total_quantity;
          if (res.status !== 200 || !(qtyTotal > 0)) {
            throw new Error(
              `GraphQL addConfigurableProductsToCart failed: HTTP ${res.status} ` +
                `${JSON.stringify(res.body?.errors || res.body).slice(0, 400)}`
            );
          }
          expect(qtyTotal, "cart total_quantity").to.be.greaterThan(0);
          cy.syncScandiCartId(cartId);
        });
      });
    });
  }
);

/**
 * Complete guest checkout via Magento GraphQL when ScandiPWA UI cart/checkout is empty.
 */
Cypress.Commands.add("placeGuestOrderGraphql", (shipping) => {
  const email =
    shipping.email || `e2e.guest.${Date.now()}@mailinator.com`;
  const regionCode = shipping.regionCode || "CA";
  const countryCode = shipping.countryCode || "US";

  cy.window().then((win) => {
    const cartId =
      win.localStorage.getItem("guest_quote_id") ||
      win.localStorage.getItem("cart_id") ||
      win.localStorage.getItem("cartId") ||
      win.localStorage.getItem("guest_cart_id");
    expect(cartId, "cart id for GraphQL checkout").to.be.a("string");

    const address = {
      firstname: shipping.name?.firstName || shipping.firstName,
      lastname: shipping.name?.lastName || shipping.lastName,
      company: shipping.company || "",
      street: [shipping.streetAddress || shipping.street],
      city: shipping.city,
      postcode: shipping.postalCode || shipping.postcode,
      telephone: shipping.telephone,
      country_code: countryCode,
      region: regionCode,
      save_in_address_book: false,
    };

    const run = (query, variables) =>
      cy.gql(query, variables, { retries: 2, timeout: 90000 }).then((res) => {
        if (res.status !== 200) {
          throw new Error(
            `GraphQL checkout HTTP ${res.status}: ${JSON.stringify(res.body).slice(0, 300)}`
          );
        }
        // Magento may return partial data + errors on product resolution; only fail hard ones.
        const fatal = (res.body?.errors || []).filter(
          (e) => !/doesn't exist|no-such-entity/i.test(e.message || "")
        );
        if (fatal.length) {
          throw new Error(
            `GraphQL checkout errors: ${JSON.stringify(fatal).slice(0, 400)}`
          );
        }
        return cy.wrap(res.body?.data, { log: false });
      });

    run(
      `mutation ($cartId: String!, $email: String!) {
        setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
          cart { email }
        }
      }`,
      { cartId, email }
    )
      .then(() =>
        run(
          `mutation ($cartId: String!, $address: CartAddressInput!) {
            setShippingAddressesOnCart(
              input: {
                cart_id: $cartId
                shipping_addresses: [{ address: $address }]
              }
            ) {
              cart {
                shipping_addresses {
                  available_shipping_methods { carrier_code method_code }
                }
              }
            }
          }`,
          { cartId, address }
        )
      )
      .then((data) => {
        const methods =
          data?.setShippingAddressesOnCart?.cart?.shipping_addresses?.[0]
            ?.available_shipping_methods || [];
        const method = methods[0] || {
          carrier_code: "flatrate",
          method_code: "flatrate",
        };
        return run(
          `mutation ($cartId: String!, $carrier: String!, $method: String!) {
            setShippingMethodsOnCart(
              input: {
                cart_id: $cartId
                shipping_methods: [{
                  carrier_code: $carrier
                  method_code: $method
                }]
              }
            ) { cart { id } }
          }`,
          {
            cartId,
            carrier: method.carrier_code,
            method: method.method_code,
          }
        );
      })
      .then(() =>
        run(
          `mutation ($cartId: String!, $address: CartAddressInput!) {
            setBillingAddressOnCart(
              input: { cart_id: $cartId, billing_address: { address: $address } }
            ) { cart { id } }
          }`,
          { cartId, address }
        )
      )
      .then(() =>
        run(
          `mutation ($cartId: String!) {
            setPaymentMethodOnCart(
              input: {
                cart_id: $cartId
                payment_method: { code: "checkmo" }
              }
            ) { cart { selected_payment_method { code } } }
          }`,
          { cartId }
        )
      )
      .then(() =>
        run(
          `mutation ($cartId: String!) {
            placeOrder(input: { cart_id: $cartId }) {
              order { order_number }
            }
          }`,
          { cartId }
        )
      )
      .then((data) => {
        const orderNumber = data?.placeOrder?.order?.order_number;
        expect(orderNumber, "GraphQL order_number").to.exist;
        cy.wrap(orderNumber).as("orderNumber");
        cy.log(`Pedido GraphQL: ${orderNumber}`);
      });
  });
});


Cypress.Commands.add("login", (email, password) => {
  cy.visitWithRetry("/customer/account/login/");
  cy.contains("Sign in", { timeout: 30000 }).should("be.visible");
  cy.acceptCookies();
  cy.get('input[name="email"]:visible').first().clear().type(email, { delay: 20 });
  cy.get('input[name="password"]:visible')
    .first()
    .clear()
    .type(password, { delay: 20 });
  cy.contains("button", /^Sign in$/i).filter(":visible").first().click();
});

const RETRYABLE = new Set([502, 503, 504]);

Cypress.Commands.add("registerAccount", (account, attempt = 1) => {
  const maxAttempts = 3;

  cy.intercept("POST", "**/graphql*", (req) => {
    const raw =
      typeof req.body === "object"
        ? JSON.stringify(req.body)
        : String(req.body || "");
    if (/createCustomer\s*\(/i.test(raw)) {
      req.alias = "createCustomer";
    }
  });

  cy.visitWithRetry("/customer/account/create");
  cy.get('input[name="firstname"]:visible', { timeout: 60000 }).should(
    "be.visible"
  );
  cy.acceptCookies();

  cy.get('input[name="firstname"]:visible')
    .first()
    .clear()
    .type(account.firstName, { delay: 30 });
  cy.get('input[name="lastname"]:visible')
    .first()
    .clear()
    .type(account.lastName, { delay: 30 });
  cy.get('input[name="email"]:visible')
    .first()
    .clear()
    .type(account.email, { delay: 20 });
  cy.get('input[name="password"]:visible')
    .first()
    .clear()
    .type(account.password, { delay: 20 });
  cy.get('input[name="confirm_password"]:visible')
    .first()
    .clear()
    .type(account.password, { delay: 20 });

  cy.contains("button", /sign up/i).filter(":visible").first().click();

  cy.wait("@createCustomer", { timeout: 120000 }).then((interception) => {
    const status = interception.response?.statusCode;
    const body = interception.response?.body;
    const parsed = typeof body === "string" ? JSON.parse(body) : body;
    const email = parsed?.data?.createCustomer?.customer?.email;
    const errors = parsed?.errors;

    if (RETRYABLE.has(status) && attempt < maxAttempts) {
      cy.log(
        `createCustomer HTTP ${status} (tentativa ${attempt}/${maxAttempts}). Retentando…`
      );
      cy.wait(3000);
      return cy.registerAccount(
        {
          ...account,
          email: `e2e.shop.${Date.now()}@mailinator.com`,
        },
        attempt + 1
      );
    }

    if (RETRYABLE.has(status)) {
      throw new Error(
        `createCustomer falhou após ${maxAttempts} tentativas (HTTP ${status}). ` +
          "Demo ScandiPWA/Cloudflare instável."
      );
    }

    expect(status, "createCustomer HTTP status").to.eq(200);
    if (errors?.length) {
      throw new Error(
        `createCustomer GraphQL errors: ${JSON.stringify(errors).slice(0, 400)}`
      );
    }
    expect(email, "created customer email").to.eq(account.email);
  });
});
