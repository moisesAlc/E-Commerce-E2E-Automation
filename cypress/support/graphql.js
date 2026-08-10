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
 * Runs before specs so we do not burn minutes on UI when origin is 502.
 */
Cypress.Commands.add("healthcheck", () => {
  const started = Date.now();

  cy.gql("{ storeConfig { store_name store_code } }", {}, {
    retries: 2,
    timeout: 60000,
  }).then((res) => {
    const ms = Date.now() - started;
    cy.log(`healthcheck GraphQL em ${ms}ms (HTTP ${res.status})`);

    if (RETRYABLE_STATUS.has(res.status)) {
      throw new Error(
        `Demo GraphQL unavailable (HTTP ${res.status} após retries, ${ms}ms). ` +
          "O alvo público ScandiPWA está instável (Cloudflare/origin). " +
          "Abortando spec para fail-fast — tente novamente mais tarde."
      );
    }

    if (res.status !== 200 || res.body?.errors?.length) {
      throw new Error(
        `Demo GraphQL unhealthy (HTTP ${res.status}, ${ms}ms): ` +
          `${JSON.stringify(res.body?.errors || res.body).slice(0, 300)}`
      );
    }

    expect(
      res.body?.data?.storeConfig?.store_name,
      "storeConfig.store_name"
    ).to.be.a("string");
  });
});
