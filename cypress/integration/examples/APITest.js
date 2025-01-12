// <reference types='Cypress' />

describe('API test suite', function () {
    it('API test case', function () {
        // cy.request('method', 'url', 'payload/body') <- syntax
        cy.request('POST', 'https://fakestoreapi.com/products',
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        ).then(function(res) {
            expect(res.body).to.have.property('title', 'test product');
            expect(res.status).to.equal(200);
        });
    });
});