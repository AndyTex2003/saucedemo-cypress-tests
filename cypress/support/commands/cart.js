
Cypress.Commands.add('validarProdutoNoCarrinho', (nome) => {

  cy.get('.cart_item').within(() => {

    cy.get('.inventory_item_name')
      .should('be.visible')
      .and('contain', nome);

    cy.get('.inventory_item_price')
      .should('be.visible')
      .invoke('text')
      .should('match', /\$\d+\.\d{2}/)
  });

});