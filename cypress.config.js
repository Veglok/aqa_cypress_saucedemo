const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    homePageUrl: 'https://www.saucedemo.com/inventory.html',
    checkoutCompletePageUrl: 'https://www.saucedemo.com/checkout-complete.html',
    viewportWidth: 1280,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
