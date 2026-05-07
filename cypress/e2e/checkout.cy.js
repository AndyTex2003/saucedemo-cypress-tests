

describe('Checkout - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('valido');
        cy.adicionarProduto('Sauce Labs Backpack');
        cy.irParaCarrinho();

    });

    it('Deve iniciar o checkout', () => {
        cy.get('[data-test="checkout"]').click();

        cy.url().should('include', '/checkout-step-one');
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
    });

    it('Deve preencher dados do checkout', () => {
        cy.preencherCheckout('valido');

        cy.url().should('include', '/checkout-step-two');
    });

    it('Deve finalizar a compra com sucesso', () => {
        cy.preencherCheckout('valido');

        // Finaliza
        cy.get('[data-test="finish"]').click();

        // valida sucesso
        cy.url().should('include', '/checkout-complete');
        cy.get('[data-test="complete-header"]')
            .should('contain', 'Thank you for your order!');
        cy.get('[data-test="back-to-products"]').should('be.visible');

    });

    it('Deve exibir erro ao não informar nome', () => {
        cy.preencherCheckout('semNome');

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'First Name is required');
    });

    it('Deve exibir erro ao não informar o sobrenome', () => {
        cy.preencherCheckout('semSobrenome');

        cy.get('[data-test="error"]')
            .should('contain', 'Last Name is required');
    });

    it('Deve exibir erro ao não informar o CEP', () => {
        cy.preencherCheckout('semCep');

        cy.get('[data-test="error"]')
            .should('contain', 'Postal Code is required');
    });
});