describe('CT603 - Validar a remoção de um produto do carrinho', () => {

  it('Deve remover a Mochila Fusion do carrinho', () => {

    // Abre a home via baseUrl (cypress.config.js)
    cy.visit('/')

    cy.contains('Fusion Backpack')
      .should('be.visible')
      .click()

    cy.get('button[title="Add to Cart"]')
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    cy.contains('You added Fusion Backpack to your shopping cart.')
      .should('be.visible')

    // Abrir carrinho
    cy.get('a.action.showcart')
      .click()

    // Clicar na lixeira visível para remover o produto
    cy.get('.minicart-items .action.delete:visible')
      .click()

    // Confirmar a remoção
    cy.contains('button', 'OK')
      .click()

    // Validar que o carrinho ficou vazio
    cy.contains('You have no items in your shopping cart.')
      .should('be.visible')

  })

})
