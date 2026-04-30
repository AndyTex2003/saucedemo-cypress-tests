describe('Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://saucedemo.com/');
  });
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {    

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();


    cy.url().should('include', '/inventory');
    cy.contains('Products').should('be.visible');
  });

  it('Login com senha inválida deve exibir mensagem de erro', () => {    

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Username and password do not match any user in this service').should('be.visible');
  });

  it('Login com usuário vazio deve exibir erro', () => {
    
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Username is required').should('be.visible')

  });

  it('Login com senha vazia deve exibir erro', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
  
});