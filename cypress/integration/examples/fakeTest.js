// <reference types='Cypress' />

describe('Interceptor test suite', function () {
    it('Fake test case', function() {
        cy.visit(Cypress.env('url')+'/angularAppdemo/');
        
        // cy.intercept({requestObj}, {responseObj}); <- syntax
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "DSR",
                    "aisle": "2304"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RCD",
                    "aisle": "2305"
                },
            ]
        }).as('bookRetrievals');
        cy.get('button[class="btn btn-primary"]').click();
        cy.wait('@bookRetrievals').then(({request, response}) => {
            cy.get('tr').should('have.length', response.body.length + 1); //(+1 because header is also has tr tag)
            if(response.body.length === 1){
                cy.get('p').should('have.text', 'Oops only 1 Book available');
            }
        });
    });
});