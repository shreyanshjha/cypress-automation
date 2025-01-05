// <reference types='Cypress' />

describe('Mouseover test suite', function(){
    it('My first mouseover test case', function(){
        cy.visit(Cypress.env('url')+'/AutomationPractice/');
        cy.get('div.mouse-hover-content').invoke('show'); //show is jquery method
        // force true is used to click on hidden elements
        // (if using click({force: true} then remove above line 6 invoke is not needed))
        cy.get('div.mouse-hover-content > a[href="#top"]').click();

        cy.url().should('contain', '/#top');
    });
});