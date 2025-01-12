// <reference types='Cypress' />

describe('Interceptor test suite', function () {
    it('Fake test case', function() {

        cy.visit(Cypress.env('url')+'/angularAppdemo/');

        // cy.intercept(method, url, request); <- syntax

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
              req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
              req.continue((res) => {
                  //expect(res.statusCode).to.equal(403);
              })
            }
        ).as('dummyURL');

        cy.get('button[class="btn btn-primary"]').click();

        cy.wait('@dummyURL');
    });
});