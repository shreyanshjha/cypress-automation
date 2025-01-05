// <reference types='Cypress' />

describe('My first test suite', function () {
    it('My first test case', function() {
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('.product:visible').should('have.length', 4);
        // parent child chaining
        cy.get('.products').as('productlocator');
        cy.get('@productlocator').find('.product').should('have.length', 4);
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('@productlocator').find('.product').each((element) => {
            const textcontent = element.find('.product-name').text();
            if(textcontent.includes('Cashews')) {
                cy.wrap(element).find('button').click();
            }
        });
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text());
        });
    });
});