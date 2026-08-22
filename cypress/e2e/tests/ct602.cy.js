describe('CT602 - Validar a alteração da quantidade de um produto no carrinho', () => {

  it('Deve alterar a quantidade da Mochila Fusion para 2', () => {

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

    cy.passo('6. Alterar quantidade de 1 para 2')
    cy.get('.minicart-items .item-qty')
      .clear()
      .type('2')

    cy.passo('7. Atualizar quantidade')
    cy.get('.minicart-items .update-cart-item')
      .click()

    cy.get('.minicart-items .item-qty')
      .should('have.value', '2')
    cy.passo('8. Quantidade = 2 validada')

  })

})
