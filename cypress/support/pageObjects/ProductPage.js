import {CartPage} from "./CartPage";

export class ProductPage {
    pageValidation() {
        cy.contains('Shop Name').should('be.visible');
    };

    getCardCount() {
        return cy.get('app-card');
    };

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('Add').click();
    };

    selectProduct(productName) {
        return cy.get('app-card').filter(`:contains("${productName}")`);
    };
    clickOnSelectedProduct(productName) {
        this.selectProduct(productName).contains('Add').click();
    };

    gotoCart() {
        cy.get('#navbarResponsive').contains('a', 'Checkout').click();
        return new CartPage();
    };
}