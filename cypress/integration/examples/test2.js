// <reference types='Cypress' />

describe('My second test suite', function () {
    it('search the product perform certain operation', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productlocator');
        cy.get('@productlocator').find('.product').each((element) => {
            const textcontent = element.find('.product-name').text();
            if(textcontent.includes('Cashews')) {
                cy.wrap(element).find('button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get('.products-wrapper > .products').contains('Place Order').click();
    });
});