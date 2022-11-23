const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    mobileViewportWidthBreakpoint: 414,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://magento.softwaretestingboard.com"
  },
});
