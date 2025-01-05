import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {HomePage} from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage();
Given('I am on ecommerce page', function() {
    homePage.goto(Cypress.env('url')+'/loginpagePractise/');
});

When('I login to the application', function() {
    this.productPage = homePage.login(this.ecommerceData.username, this.ecommerceData.password);
    this.productPage.pageValidation();
    this.productPage.getCardCount().should('have.length', 4);
});

When('I login to the application portal', function (dataTable) {
    this.productPage = homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
    this.productPage.pageValidation();
    this.productPage.getCardCount().should('have.length', 4);
});

When('I add items to cart and Checkout', function () {
    this.productPage.selectFirstProduct();
    this.productPage.selectProduct(this.ecommerceData.productName).should('have.length', 1);
    this.productPage.clickOnSelectedProduct(this.ecommerceData.productName);

    this.cartPage = this.productPage.gotoCart();
});

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function(totalAmount) {
        expect(totalAmount).to.be.lessThan(200000);
    });
});

Then('Select the country submit and verify Thankyou', function () {
    const confimationPage = this.cartPage.checkOutItems();
    confimationPage.submitFormDetails();
    confimationPage.getAlertMessage().should('contain', 'Success!');
});