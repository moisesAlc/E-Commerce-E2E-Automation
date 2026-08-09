const RETRYABLE = new Set([502, 503, 504]);

export class RegisterPage {
  webLocators = {
    firstName: 'input[name="firstname"]:visible',
    lastName: 'input[name="lastname"]:visible',
    email: 'input[name="email"]:visible',
    password: 'input[name="password"]:visible',
    confirmPassword: 'input[name="confirm_password"]:visible',
  };

  openURL() {
    cy.intercept("POST", "**/graphql*", (req) => {
      const raw =
        typeof req.body === "object"
          ? JSON.stringify(req.body)
          : String(req.body || "");
      if (/createCustomer\s*\(/i.test(raw)) {
        req.alias = "createCustomer";
      }
    });

    cy.visit("/customer/account/create");
    cy.get(this.webLocators.firstName, { timeout: 60000 }).should("be.visible");
    cy.acceptCookies();
  }

  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).first().clear().type(FName, { delay: 30 });
  }

  enterLastName(LName) {
    cy.get(this.webLocators.lastName).first().clear().type(LName, { delay: 30 });
  }

  enterEmail(Email) {
    this._email = Email;
    cy.get(this.webLocators.email).first().clear().type(Email, { delay: 20 });
  }

  enterPassword(password) {
    cy.get(this.webLocators.password).first().clear().type(password, { delay: 20 });
  }

  enterConfirmPassword(password) {
    cy.get(this.webLocators.confirmPassword)
      .first()
      .clear()
      .type(password, { delay: 20 });
  }

  enterCreateAnAccountButton() {
    cy.contains("button", /sign up/i).filter(":visible").first().click();
  }

  /**
   * Waits for createCustomer. Retries the full form submit on Cloudflare 502/503/504.
   */
  successFullCreateAccountMessage(expectedEmail, attempt = 1) {
    const maxAttempts = 3;
    const email = expectedEmail || this._email;

    cy.wait("@createCustomer", { timeout: 120000 }).then((interception) => {
      const status = interception.response?.statusCode;
      const body = interception.response?.body;
      const parsed = typeof body === "string" ? JSON.parse(body) : body;
      const createdEmail = parsed?.data?.createCustomer?.customer?.email;
      const errors = parsed?.errors;

      if (RETRYABLE.has(status) && attempt < maxAttempts) {
        const nextEmail = `e2e.signup.${Date.now()}@mailinator.com`;
        cy.log(
          `createCustomer HTTP ${status} (tentativa ${attempt}/${maxAttempts}). Retentando com ${nextEmail}…`
        );
        cy.wait(3000);
        this.openURL();
        this.enterFirstName("Hq");
        this.enterLastName("Am");
        this.enterEmail(nextEmail);
        this.enterPassword("Captain@12345");
        this.enterConfirmPassword("Captain@12345");
        this.enterCreateAnAccountButton();
        return this.successFullCreateAccountMessage(nextEmail, attempt + 1);
      }

      if (RETRYABLE.has(status)) {
        throw new Error(
          `createCustomer falhou após ${maxAttempts} tentativas (HTTP ${status}). ` +
            "Demo ScandiPWA/Cloudflare instável — rode de novo mais tarde."
        );
      }

      expect(status, "createCustomer HTTP status").to.eq(200);
      if (errors?.length) {
        throw new Error(
          `createCustomer GraphQL errors: ${JSON.stringify(errors).slice(0, 400)}`
        );
      }
      expect(createdEmail, "created customer email").to.eq(email);
    });
  }
}
