const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 16000,
    execTimeout: 120000,
    taskTimeout: 120000,
    pageLoadTimeout: 120000,
    requestTimeout: 120000,
    responseTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
