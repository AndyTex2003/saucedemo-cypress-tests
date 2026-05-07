

describe('Cart - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('valido');
        cy.adicionarProduto('Sauce Labs Backpack');
        cy.irParaCarrinho();
      
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
        cy.validarProdutoNoCarrinho('Sauce Labs Backpack');
    });

});