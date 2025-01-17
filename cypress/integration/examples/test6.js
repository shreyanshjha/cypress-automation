// <reference types='Cypress' />

describe('Table test suit', function() {
    it('First test case for table', function(){
        cy.visit(Cypress.env('url')+'/AutomationPractice/');
        cy.get('table#product > tbody tr td:nth-child(2)').each((el, index) => {
            const text = el.text();
            if(text.includes('Python')) {
                cy.get('table#product > tbody tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        });
    });
});