import {leggings} from '../typed-fixtures/product-info-fixture';

describe('search tests', () => {

    const defaultProductDisplayCount = 7;

    beforeEach(() => {
        cy.visit('/');
        cy.waitForProductsToBeLoaded();
    });

    it('It is possible to search for a term with multiple results', () => {
        cy.searchProduct('women\'s');
        cy.productList().should('have.length', 2);
    });

    it('It is possible to search for a term that has no results', () => {
        cy.searchProduct('womens');
        cy.productList().should('have.length', 0);
        cy.checkNoProductsFound();
    });

    it('It is not possible to search for a term by brand', () => {
        cy.contains(leggings.brand).should('exist');
        cy.searchProduct(leggings.brand);
        cy.productList().should('have.length', 0);
        cy.checkNoProductsFound();
    });

    it('It is possible to clear search results', () => {
        cy.searchProduct('test-value');
        cy.productList().should('have.length', 0);
        cy.get('.search a').click();
        cy.productList().should('have.length', defaultProductDisplayCount);
    });

    it('Clicking a specific searched product should navigate to the products listing', () => {
        cy.searchProduct(leggings.title);
        cy.productContainer().should('have.length', 1);
        cy.productList().eq(0).click();
        cy.contains(leggings.title).should('exist');
        cy.location('pathname').should('equal', leggings.listingPath);
    });
});
