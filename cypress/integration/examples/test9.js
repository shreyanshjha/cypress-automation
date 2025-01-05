// <reference types='Cypress' />
// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Test suite for iframe', function(){
    it('Test case of html iframe', function(){
       cy.visit(Cypress.env('url')+'/AutomationPractice/');
       cy.frameLoaded('#courses-iframe');
       cy.iframe().find('div.header-upper nav.main-menu a[href="mentorship"]').click();
       cy.wait(2000);
       cy.iframe().find('h1.pricing-title').should('have.length', 2);
    });
});