

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

});