describe('On-app loading tests', () => {
    it('Application loads successfully and displays 7 products', () => {
        cy.visit('/');
        cy.productList().should('have.length', 7);

    });
});
