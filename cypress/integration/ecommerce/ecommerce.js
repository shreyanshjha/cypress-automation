// <reference types='Cypress' />

import {HomePage} from "../../support/pageObjects/HomePage";

describe('End to End ecommerce testing suite', () => {
    before(function() {
        cy.fixture('ecommerce').then((data) => {
            this.ecommerceData = data;
            this.homePage = new HomePage();
        });
    })
    it('Submit order', function() {
        const productName = this.ecommerceData.productName;
        this.homePage.goto(Cypress.env('url')+'/loginpagePractise/');
        const productPage = this.homePage.login(this.ecommerceData.username, this.ecommerceData.password);
        productPage.pageValidation();
        productPage.getCardCount().should('have.length', 4);
        productPage.selectFirstProduct();
        productPage.selectProduct(productName).should('have.length', 1);
        productPage.clickOnSelectedProduct(productName);

        const cartPage = productPage.gotoCart();
        cartPage.sumOfProducts().then(function(totalAmount) {
            expect(totalAmount).to.be.lessThan(200000);
        });
        const confimationPage = cartPage.checkOutItems();
        confimationPage.submitFormDetails();
        confimationPage.getAlertMessage().should('contain', 'Success!');
    });
});