

describe('Checkout - SouceDemo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login('valido');

        // preparando cenário
        cy.contains('.inventory_item', 'Sauce Labs Backpack')
            .within(() => {
                cy.contains('button', 'Add to cart').click();
            });

        cy.get('.shopping_cart_link').click();
    });

    it('Deve iniciar o checkout', () => {
        cy.contains('button', 'Checkout').click();

        cy.url().should('include', '/checkout-step-one');
        cy.contains('Checkout: Your Information').should('be.visible');
    });

    it('Deve preencher dados do checkout', () => {
        cy.contains('button', 'Checkout').click();

        cy.get('[data-test="firstName"]').type('Anderson');
        cy.get('[data-test="lastName"]').type('Santos');
        cy.get('[data-test="postalCode"]').type('12345');

        cy.get('[data-test="continue"]').click();

        cy.url().should('include', '/checkout-step-two');
    });

    it('Deve finalizar a compra com sucesso', () => {
        cy.contains('button', 'Checkout').click();

        cy.get('[data-test="firstName"]').type('Anderson');
        cy.get('[data-test="lastName"]').type('Santos');
        cy.get('[data-test="postalCode"]').type('12345');

        cy.get('[data-test="continue"]').click();

        // valida que chegou no resumo
        cy.url().should('include', '/checkout-step-two');

        // Finaliza
        cy.get('[data-test="finish"]').click();

        // valida sucesso
        cy.url().should('include', '/checkout-complete');
        cy.contains('Thank you for your order!').should('be.visible');
        cy.get('[data-test="back-to-products"]').should('be.visible');

    });
});