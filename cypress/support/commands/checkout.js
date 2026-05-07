
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