// <reference types='Cypress' />

describe('Handling child tab', function() {
    it('Should handle child tab', function() {
        cy.visit(Cypress.env('url')+'/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', function() {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('#about-page div.section-title.mt-50 > h2').should('contain', 'Welcome to QAClick Academy');
        });
    });
});