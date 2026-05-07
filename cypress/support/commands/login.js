
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