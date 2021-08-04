import {noProductsFound} from './constants';

// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            navBar(): Chainable<Element>;

            productListContainer(): Chainable<Element>;

            productList(): Chainable<Element>;

            productContainer(): Chainable<Element>;

            productTitle(): Chainable<Element>;

            productFirstTitle(): Chainable<Element>;

            searchProduct(text: string): Chainable<Element>;

            waitForProductsToBeLoaded(): Chainable<Element>;

            checkNoProductsFound(): Chainable<Element>;

            shouldBeHome(): Chainable<Element>;
        }
    }
}

/**
 * DOM Element commands for quick access via the `cy` object
 */
Cypress.Commands.add('navBar', () => {
    return cy.get('.navContainer');
});

Cypress.Commands.add('productContainer', () => {
    return cy.get('.product-container');
});

Cypress.Commands.add('productListContainer', () => {
    return cy.get('.products-list-container');
});

Cypress.Commands.add('productList', () => {
    return cy.productListContainer().find('.list .list-item');
});

Cypress.Commands.add('productTitle', () => {
    return cy.productContainer().find('div.title');
});

Cypress.Commands.add('productFirstTitle', () => { // div.title has 2 elements inside product container
    return cy.productTitle().eq(0);
});

/**
 * Custom command sets for operations with DOM elements
 */
Cypress.Commands.add('searchProduct', (text: string) => {
    return cy.get('.search-input')
        .type(text)
        .should('have.value', text);
});

Cypress.Commands.add('waitForProductsToBeLoaded', () => {
    cy.productListContainer().should('not.include.text', noProductsFound);
});

Cypress.Commands.add('checkNoProductsFound', () => {
    cy.productListContainer().should('include.text', noProductsFound);
});

Cypress.Commands.add('shouldBeHome', () => {
    cy.location('pathname').should('equal', '/list');
});
