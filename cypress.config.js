const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento2-demo.magebit.com",
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
