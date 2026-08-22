describe('CT601 - Validar a adição de um produto ao carrinho', () => {

  it('Deve adicionar a Mochila Fusion ao carrinho', () => {

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

    // Validar quantidade no carrinho
    cy.get('.counter-number')
      .should('contain', '1')

    // Abrir carrinho
    cy.get('a.action.showcart')
      .click()

    // Validar produto no carrinho
    cy.contains('Fusion Backpack')
      .should('be.visible')

  })

})