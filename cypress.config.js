const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {preprendTransformerToOptions} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const Exceljs = require('exceljs');

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

      on('task', {
        excelToJsonConverter(filePath) {
          const result = excelToJson({
            source: fs.readFileSync(filePath)
          });
          return result;
        }
      });

      on('task', {
        async writeExcelTest({searchText, replaceText, filePath}) {
          const workBook =new Exceljs.Workbook();
          await workBook.xlsx.readFile(filePath)
          const workSheet = workBook.getWorksheet('Sheet1');
          const output = await readExcel(workSheet, searchText);

          const cell = workSheet.getCell(output.row, output.col);
          cell.value = replaceText;
          return workBook.xlsx.writeFile(filePath).then(function() {
            return true;
          }).catch(function(err) {
            return false;
           });
        }
      })

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    specPattern: 'cypress/integration/**/*.{js,feature}'
  },
});
// run project and generate report in cypress cloud dashboard
// npx cypress run --record --key 5e71110c-ea4e-46c2-a810-8e975678c656

async function readExcel(workSheet, searchText) {
  let output = {row: -1, col: -1};
  workSheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if(cell.value === searchText){
        output.row = rowNumber;
        output.col = colNumber;
      }
    });
  });
  return output;
}