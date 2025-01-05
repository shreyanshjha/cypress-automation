import {ConfirmationPage} from "./ConfirmationPage";

export class CartPage {
    checkOutItems() {
        cy.contains('button', 'Checkout').click();
        return new ConfirmationPage();
    };

    sumOfProducts() {
        let totalAmount = 0;
        return cy.get('tr td:nth-child(4) strong')
            .each(($el) => {
            totalAmount += Number($el.text().split(' ')[1]);
        }).then(() => {
            return totalAmount;
        });
    };
}