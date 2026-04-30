
Cypress.Commands.add('login', (username, password) => {
    if (username) {
        cy.get('[data-test="username"]').clear().type(username);
    }

    if (password) {
        cy.get('[data-test="password"]').clear().type(password);
    }

    cy.get('[data-test="login-button"]').click();
});
