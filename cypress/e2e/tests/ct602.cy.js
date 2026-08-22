describe('CT602 - Validar a alteração da quantidade de um produto no carrinho', () => {

  it('Deve alterar a quantidade da Mochila Fusion para 2', () => {

    // Abre a home via baseUrl (cypress.config.js)
    cy.visit('/')

    // Acessar a Fusion Backpack
    cy.contains('Fusion Backpack')
      .should('be.visible')
      .click()

    // Adicionar produto ao carrinho
    cy.get('button[title="Add to Cart"]')
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    // Validar que o produto foi adicionado
    cy.contains('You added Fusion Backpack to your shopping cart.')
      .should('be.visible')

    // Abrir carrinho
    cy.get('a.action.showcart')
      .click()

    // Alterar quantidade de 1 para 2
    cy.get('.minicart-items .item-qty')
      .clear()
      .type('2')

    // Atualizar a quantidade
    cy.get('.minicart-items .update-cart-item')
      .click()

    // Validar que a quantidade foi alterada para 2
    cy.get('.minicart-items .item-qty')
      .should('have.value', '2')

  })

})