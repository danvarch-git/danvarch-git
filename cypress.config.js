const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://www.latlong.net/",
    "pageLoadTimeout": 1000000,
    "video": true
  },
  videoCompression: 15 
});
