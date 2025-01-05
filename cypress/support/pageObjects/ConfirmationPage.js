export class ConfirmationPage {
    submitFormDetails() {
        //cy.submitFormDetails(); // custom command created in cypress/support/commands.js
        cy.get('#country').type('India');
        cy.wait(2000);
        cy.get('.suggestions ul li a').click();
        cy.get('input[value="Purchase"]').click();
    };

    getAlertMessage() {
        return cy.get('div.alert.alert-success');
    };

}