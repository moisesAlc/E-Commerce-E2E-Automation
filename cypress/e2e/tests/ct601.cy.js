describe('CT601 - Validar a adição de um produto ao carrinho', () => {

  it('Deve adicionar a Mochila Fusion ao carrinho', () => {

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

    cy.get('.counter-number')
      .should('contain', '1')
    cy.passo('5. Contador do carrinho = 1')

    cy.get('a.action.showcart')
      .click()
    cy.passo('6. Minicart aberto')

    cy.contains('Fusion Backpack')
      .should('be.visible')
    cy.passo('7. Fusion Backpack visível no minicart')

  })

})
