const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {preprendTransformerToOptions} = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com",
  },
  projectId: "x1wf65",
  video: true,
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",
          browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    specPattern: 'cypress/integration/**/*.{js,feature}'
  },
});
// run project and generate report in cypress cloud dashboard
// npx cypress run --record --key 5e71110c-ea4e-46c2-a810-8e975678c656