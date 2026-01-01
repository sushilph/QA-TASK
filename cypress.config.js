const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, //  set true to record videos
    videoCompression: 32,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
