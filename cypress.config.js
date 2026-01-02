const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,  // Enable video recording (default is true)
    videosFolder: 'cypress/videos',  // Where videos are saved
    videoCompression: 32,  
  },
});
