/**
 * In the provided project nav buttons don't really navigate where they are supposed to, so tests are written to check
 * if they navigate home (always re-routed to /list)
 */

import {leggings} from '../typed-fixtures/product-info-fixture';

describe('Website basic navigation tests', () => {
    beforeEach(() => {
        cy.visit(leggings.listingPath);
    });

    const shouldBeHome = () => cy.location('pathname').should('equal', '/list');

    it('Home should navigate home', () => {
        cy.navBar().contains('Home').click();
        shouldBeHome();
    });

    it('About should navigate home', () => {
        cy.navBar().contains('About').click();
        shouldBeHome();
    });

    it('Contacts should navigate home', () => {
        cy.navBar().contains('Contacts').click();
        shouldBeHome();
    });

    it('Logo should navigate home', () => {
        cy.get('#logo').click();
        shouldBeHome();
    });
});

describe('Product navigation tests', () => {
    it('Clicking a specific product should navigate to the products listing', () => {
        const searchTerm = leggings.title;
        cy.visit('/');
        cy.productTitle().contains(searchTerm).click();
        cy.location('pathname').should('equal', leggings.listingPath);
        cy.productFirstTitle().should('have.text', searchTerm);
    });
});
