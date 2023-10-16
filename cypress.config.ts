import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com/index.html",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
  },
});
