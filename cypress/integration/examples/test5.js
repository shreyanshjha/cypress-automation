// <reference types='Cypress' />

describe('Handling child windows', () => {
    it('Should handle child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('#about-page div.section-title.mt-50 > h2').should('contain', 'Welcome to QAClick Academy');
        });
    });
});