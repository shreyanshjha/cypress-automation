// <reference types='Cypress' />

describe('My third test suite', function () {
    it('search the product perform certain operation', function() {
        cy.visit(Cypress.env('url')+'/AutomationPractice/');

        // Checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        cy.get('div#checkbox-example > fieldset input[type="checkbox"]').check(['option2','option3'])
            .should('be.checked').and('have.value', 'option2').and('be.checked', 'option3');

        // Static Dropdowns
        cy.get('div.cen-right-align > fieldset select#dropdown-class-example').select('option2')
            .should('have.value', 'option2');

        // Dynamic dropdowns
        cy.get('div#select-class-example > fieldset > input#autocomplete').type('ind');

        cy.get('ul#ui-id-1 li.ui-menu-item').each((element) => {
            if(element.text() === "India") {
                cy.wrap(element).click();
            }
        });

        cy.get('div#select-class-example > fieldset > input#autocomplete').should('have.value', 'India');

        // Hide/Show button and textbox
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // Radio Button
        cy.get('[value="radio3"]').check().should('be.checked');
        cy.get('[value="radio1"]').check().should('be.checked');
        cy.get('[value="radio3"]').should('not.be.checked');
    });
});