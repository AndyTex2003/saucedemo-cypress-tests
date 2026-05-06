
Cypress.Commands.add('login', (tipo) => {
  cy.fixture('login').then((dados) => {
    const user = dados[tipo];

    if (user.username) {
      cy.get('[data-test="username"]').clear().type(user.username);
    }

    if (user.password) {
      cy.get('[data-test="password"]').clear().type(user.password);
    }

    cy.get('[data-test="login-button"]').click();
  });
});

Cypress.Commands.add('preencherCheckout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="checkout"]').click();

  cy.get('[data-test="firstName"]').clear().type(firstName);
  cy.get('[data-test="lastName"]').clear().type(lastName);
  cy.get('[data-test="postalCode"]').clear().type(postalCode);

  cy.get('[data-test="continue"]').click();
  
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', (nomeProduto) => {
  cy.contains('.inventory_item', nomeProduto)
    .within(() => {
      cy.contains('button', 'Add to cart').click();
    });

  cy.get('.shopping_cart_link').click();
});