import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-multi-reporters",
reporterOptions: {
  reporterEnabled: "mochawesome",
  mochawesomeReporterOptions: {
    reportDir: "cypress/reports/mocha",
    quite: true,
    overwrite: false,
    html: false,
    json: true,
  },
},
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com/index.html",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
  },
});
