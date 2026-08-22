describe('CT603 - Validar a remoção de um produto do carrinho', () => {

  it('Deve remover a Mochila Fusion do carrinho', () => {

    // Abre a home via baseUrl (cypress.config.js)
    cy.visit('/')
    cy.passo('1. Home aberta (Magebit)')

    cy.contains('Fusion Backpack')
      .should('be.visible')
      .click()
    cy.passo('2. Página da Fusion Backpack')

    cy.passo('3. Adicionar ao carrinho')
    cy.get('button[title="Add to Cart"]')
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    cy.contains('You added Fusion Backpack to your shopping cart.')
      .should('be.visible')
    cy.passo('4. Mensagem de sucesso confirmada')

    cy.get('a.action.showcart')
      .click()
    cy.passo('5. Minicart aberto')

    cy.passo('6. Remover o produto (lixeira)')
    cy.get('.minicart-items .action.delete:visible')
      .click()

    cy.passo('7. Confirmar remoção (OK)')
    cy.contains('button', 'OK')
      .click()

    cy.contains('You have no items in your shopping cart.')
      .should('be.visible')
    cy.passo('8. Carrinho vazio validado')

  })

})
