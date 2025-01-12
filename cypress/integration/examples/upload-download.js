// <reference types='Cypress' />

describe('Upload download Test suite', function() {
    it('verify excel upload download', function () {
        const replaceText = 'Chilly';
        const searchText = 'Banana';
        const filePath = `${Cypress.config("fileServerFolder")}/cypress/downloads/download.xlsx`;
        cy.visit('https://rahulshettyacademy.com/upload-download-test/');
        cy.get('#downloadButton').click();
        cy.task('writeExcelTest', {searchText: searchText, replaceText: replaceText, filePath: filePath});

        cy.get('#fileinput').selectFile(filePath);


        // learning purpose
       // cy.contains(searchText).parent().parent().find('#cell-4-undefined')
            //.should('have.text', replaceText);
    });
})