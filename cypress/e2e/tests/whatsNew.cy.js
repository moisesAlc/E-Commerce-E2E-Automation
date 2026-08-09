import { whatsNewPage } from "../../pages/whatsNewPage";
import whatsNewData from "../../fixtures/whatsNewData.json";

const shop = new whatsNewPage();

describe("Whats New Test Suite-2", () => {
  before(() => {
    cy.healthcheck();
  });

  it("#TC-2 Shop product as guest", () => {
    // Guest flow avoids flaky createCustomer on the public demo.
    // Skip /collections (frequent Cloudflare 502); go straight to a CDN-friendly PDP.
    cy.visitWithRetry("/");
    cy.acceptCookies();

    shop.openProduct(whatsNewData.product.path);
    cy.contains(/radiant tee/i, { timeout: 30000 }).should("be.visible");

    shop.selectColourOfDress(whatsNewData.product.color);
    shop.selectSizeOfDress(whatsNewData.product.size);
    cy.contains(whatsNewData.product.sku, { timeout: 15000 }).should(
      "be.visible"
    );
    shop.typeQty(whatsNewData.product.qty || 2);
    shop.addToCartButton({
      parentSku: whatsNewData.product.parentSku || "WS12",
      sku: whatsNewData.product.sku,
      qty: whatsNewData.product.qty || 2,
    });

    shop.assertCartHasProduct(whatsNewData.product.name);

    shop.completeGuestCheckout(whatsNewData.shippingInfo);
    shop.verifyOrderPlaced(whatsNewData.product.name);
    shop.continueShoppingButton();
  });
});

