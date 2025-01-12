// <reference types='Cypress' />
const neatCSV = require('neat-csv');
let productName;
describe('JWT Session', function() {
    it('is logged in through local storage', async function() {
        cy.LoginAPI().then(function() {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'));
                    }
                }
            )
        });

        cy.get(".card-body b").eq(1).then(function(el) {
            productName = el.text();
        });
        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get('button[routerlink*="cart"]').click();
        cy.get('button').contains('Checkout').click();
        cy.get('input[placeholder="Select Country"]').type('Ind');
        cy.get('section.ta-results.list-group button').each((el) => {
            if(el.text() === " India") {
                cy.wrap(el).click();
            }
        });
        cy.get('a').contains('Place Order').click();
        cy.get('.order-summary button').contains('Click To Download Order Details in CSV').click();

        cy.readFile(Cypress.config("fileServerFolder") +"/cypress/downloads/order-invoice_shreyanshjha22.csv")
            .then(async function(text) {
                const csv = await neatCSV(text);
                const actualProductFromCSV = csv[0]["Product Name"];
                cy.log(actualProductFromCSV);
                expect(productName).to.equal(actualProductFromCSV);
            });
    });
});