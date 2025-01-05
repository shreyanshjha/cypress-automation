beforeEach(function() {
    cy.fixture('ecommerce').then((data) => {
        this.ecommerceData = data;
    });
})