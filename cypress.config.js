const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://luma-demo.scandipwa.com",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 90000,
    requestTimeout: 120000,
    responseTimeout: 120000,
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    URL: "https://luma-demo.scandipwa.com/customer/account/create",
  },
});
