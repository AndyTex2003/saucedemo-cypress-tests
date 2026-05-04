

describe('Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://saucedemo.com/');
  });
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {    

    cy.login('valido');

    cy.url().should('include', '/inventory');
    cy.contains('.title', 'Products').should('be.visible');
  });

  it('Login com senha inválida deve exibir mensagem de erro', () => {    

    cy.login('senhaInvalida');

    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Username and password do not match any user in this service').should('be.visible');
  });

  it('Login com usuário vazio deve exibir erro', () => {
    
    cy.login('usuarioVazio');
    
    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Username is required').should('be.visible');

  });

  it('Login com senha vazia deve exibir erro', () => {
    
    cy.login('senhaVazia');

    cy.get('[data-test="error"]').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
  
});