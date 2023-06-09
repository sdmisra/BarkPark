describe('Main Page Spec:', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })
  
  it('When the user visits the homepage, they see a title indicating what the app will do:', () => {
    cy.get('.app-header')
    .should('be.visible').should('exist')
    .contains('Welcome to Bark Browser!')
  })

})