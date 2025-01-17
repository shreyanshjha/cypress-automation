// <reference types='Cypress' />

describe('My third test suite', function () {
    it('search the product perform certain operation', function() {
        cy.visit(Cypress.env('url')+'/AutomationPractice/');

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn[value="Confirm"]').click();
        // Below are browser events
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });
});