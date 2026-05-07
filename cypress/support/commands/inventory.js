
Cypress.Commands.add('adicionarProduto', (nomeProduto) => {
    cy.contains('.inventory_item', nomeProduto)
        .within(() => {
            cy.get('button[data-test^="add-to-cart"]').click();
        });

});

Cypress.Commands.add('irParaCarrinho', () => {
    cy.get('.shopping_cart_link').click();
});