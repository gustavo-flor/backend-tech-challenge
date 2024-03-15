const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    baseUrl: 'http://localhost:8080'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'report',
    reportFilename: 'index',
    overwrite: true,
    html: true,
    json: false
  }
});
