import {ProductPage} from "./ProductPage";

export class HomePage {
    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#signInBtn').click(); // cy.contains('Sign In').click();
        return new ProductPage();
    };

    goto(url) {
        cy.visit(url);
    };
}