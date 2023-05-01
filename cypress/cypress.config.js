const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4eqit5",
  viewportHeight: 600,
  viewportWidth: 1000,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
