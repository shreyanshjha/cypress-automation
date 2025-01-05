// <reference types='Cypress' />

describe('Child new window test suite', function(){
    it('Test case of new window', function(){
        cy.visit(Cypress.env('url')+'/AutomationPractice/');
        cy.get('#opentab').then((el) => {
            const url = el.prop('href'); //prop is a jquery method
            cy.visit(url);
            cy.origin(url, function(){
                cy.get('div#navbarSupportedContent li > a[href="about.html"]').click();
            });
        });
    });
});