/**
 * GraphQL helpers for the public ScandiPWA demo.
 * Retries transient Cloudflare/origin failures (502/503/504).
 */

const RETRYABLE_STATUS = new Set([502, 503, 504]);

/**
 * POST /graphql with retries on gateway errors.
 * Usage: cy.gql(query, variables?, { retries, timeout })
 */
Cypress.Commands.add("gql", (query, variables = {}, options = {}) => {
  const maxAttempts = (options.retries ?? 3) + 1;
  const timeout = options.timeout ?? 90000;

  const attempt = (n) => {
    cy.request({
      method: "POST",
      url: "/graphql",
      body: { query, variables },
      failOnStatusCode: false,
      timeout,
    }).then((res) => {
      if (RETRYABLE_STATUS.has(res.status) && n < maxAttempts) {
        cy.log(
          `GraphQL HTTP ${res.status}; retry ${n}/${maxAttempts - 1}`
        );
        cy.wait(2500);
        return attempt(n + 1);
      }
      return cy.wrap(res, { log: false });
    });
  };

  return attempt(1);
});

/**
 * Fails fast with a clear message when the public demo GraphQL is down.
 */
Cypress.Commands.add("healthcheck", () => {
  cy.gql("{ storeConfig { store_name store_code } }", {}, {
    retries: 2,
    timeout: 60000,
  }).then((res) => {
    if (RETRYABLE_STATUS.has(res.status)) {
      throw new Error(
        `Demo GraphQL unavailable (HTTP ${res.status}). ` +
          "O alvo público ScandiPWA está instável (Cloudflare/origin). Tente novamente mais tarde."
      );
    }
    expect(res.status, "GraphQL health status").to.eq(200);
    expect(
      res.body?.data?.storeConfig?.store_name,
      "storeConfig.store_name"
    ).to.be.a("string");
  });
});
