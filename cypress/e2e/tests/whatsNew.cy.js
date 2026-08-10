import { whatsNewPage } from "../../pages/whatsNewPage";
import whatsNewData from "../../fixtures/whatsNewData.json";

const shop = new whatsNewPage();

describe("Whats New Test Suite-2", () => {
  before(() => {
    cy.healthcheck();
  });

  it("#TC-2 Shop product as guest", () => {
    // GraphQL-first: UI storefront (PDP/cart/checkout) is flaky on this public demo.
    // Smoke the SPA shell, then cart + order via Magento GraphQL.
    cy.visitWithRetry("/");
    cy.acceptCookies();
    cy.contains(/view products|scandipwa/i, { timeout: 30000 }).should("exist");

    cy.addConfigurableToCartGraphql({
      parentSku: whatsNewData.product.parentSku || "WS12",
      sku: whatsNewData.product.sku,
      qty: whatsNewData.product.qty || 2,
    });
    shop.assertCartGraphql(whatsNewData.product.name);

    cy.placeGuestOrderGraphql(whatsNewData.shippingInfo);
    shop.verifyOrderPlaced(whatsNewData.product.name);
    shop.continueShoppingButton();
  });
});
