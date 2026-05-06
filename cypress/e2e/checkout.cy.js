

describe('Checkout - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('valido');
        cy.adicionarProdutoAoCarrinho('Sauce Labs Backpack');        
        
    });

    it('Deve iniciar o checkout', () => {
        cy.get('[data-test="checkout"]').click();

        cy.url().should('include', '/checkout-step-one');
        cy.contains('Checkout: Your Information').should('be.visible');
    });

    it('Deve preencher dados do checkout', () => {
        cy.preencherCheckout('Anderson', 'Santos', '12345');

        cy.url().should('include', '/checkout-step-two');
    });

    it('Deve finalizar a compra com sucesso', () => {
       cy.preencherCheckout('Anderson', 'Santos', '12345');

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