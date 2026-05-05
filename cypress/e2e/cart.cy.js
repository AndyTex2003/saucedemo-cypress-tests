

describe('Cart - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('valido');

        // adiciona item antes de ir pro carrinho
        cy.contains('.inventory_item', 'Sauce Labs Backpack')
            .within(() => {
                cy.contains('button', 'Add to cart').click();
            });

        cy.get('.shopping_cart_link').click();
    });

    it('Deve acessar a página de carrinho', () => {
        cy.url().should('include', '/cart');
        cy.contains('Your Cart').should('be.visible');
    });

    it('Deve exibir o produto adicionado ao carrinho', () => {
        cy.get('.cart_item')
            .should('have.length', 1);

        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
            .should('be.visible');
    });

    it('Produto deve ter nome e preço no carrinho', () => {
        cy.get('.cart_item').within(() => {

            cy.get('.inventory_item_name')
                .should('be.visible')
                .and('contain', 'Sauce Labs Backpack');

            cy.get('.inventory_item_price')
                .should('be.visible')
                .invoke('text')
                .should('match', /\$\d+\.\d{2}/)
        });
    });

});