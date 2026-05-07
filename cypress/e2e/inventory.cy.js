

describe('Inventory - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('valido');
    });

    it('Deve exibir a lista de produtos', () => {
        cy.get('.inventory_item')
            .should('have.length', 6);
    });

    it('Cada produto deve ter nome e preço', () => {
        cy.get('.inventory_item').each(($item) => {
            cy.wrap($item).within(() => {

                cy.get('.inventory_item_name')
                    .should('be.visible')
                    .and('not.be.empty');

                cy.get('.inventory_item_price')
                    .should('be.visible')
                    .and('not.be.empty');

            });
        });
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.adicionarProduto('Sauce Labs Backpack');
        
        cy.get('.shopping_cart_badge')
            .should('have.text', '1');
    });

    it('Deve remover um produto do carrinho', () => {
        cy.adicionarProduto('Sauce Labs Backpack');

        cy.contains('.inventory_item', 'Sauce Labs Backpack')
        .within(() => {            
            cy.contains('button', 'Remove').click();
        });

        cy.get('.shopping_cart_badge')
            .should('not.exist');
    });
    
});