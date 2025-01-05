const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com",
  },
  projectId: "x1wf65",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/*/*.js'
  },
});
// run project and generate report in cypress cloud dashboard
// npx cypress run --record --key 5e71110c-ea4e-46c2-a810-8e975678c656