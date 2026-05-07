
Cypress.Commands.add('login', (tipo) => {
  cy.fixture('login').then((dados) => {
    const user = dados[tipo];

    if (!user) {
      throw new Error(`Tipo de login inválido: ${tipo}`);
    }

    if (user.username) {
      cy.get('[data-test="username"]').clear().type(user.username);
    }

    if (user.password) {
      cy.get('[data-test="password"]').clear().type(user.password);
    }

    cy.get('[data-test="login-button"]').click();
  });
});


Cypress.Commands.add('preencherCheckout', (tipo) => {
  cy.fixture('checkout').then((dados) => {
    const user = dados[tipo];

    if (!user) {
      throw new Error(`Tipo de checkout inválido: ${tipo}`);
    }

    cy.get('[data-test="checkout"]').click();

    if (user.firstName) {
      cy.get('[data-test="firstName"]').clear().type(user.firstName);
    }

    if (user.lastName) {
      cy.get('[data-test="lastName"]').clear().type(user.lastName);
    }

    if (user.postalCode) {
      cy.get('[data-test="postalCode"]').clear().type(user.postalCode);
    }

    cy.get('[data-test="continue"]').click();
  });
});


Cypress.Commands.add('adicionarProdutoAoCarrinho', (nomeProduto) => {
  cy.contains('.inventory_item', nomeProduto)
    .within(() => {
      cy.get('button[data-test^="add-to-cart"]').click();
    });

  cy.get('.shopping_cart_link').click();
});


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