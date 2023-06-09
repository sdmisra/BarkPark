describe('Main Page Spec:', () => {

  beforeEach(()=> {
    cy.loadMainPage()
    cy.visit('http://localhost:3000')
  })
  
  it('When the user visits the homepage, they see a title indicating what the app will do:', () => {
    cy.get('.app-header')
    .should('be.visible').should('exist')
    .contains('Welcome to Bark Browser!')
  })

  it('When the user visits the homepage, they are presented with a random dog image to greet them:', () => {
    cy.get('.random-dog-image')
    .should('be.visible').should('exist')
    .should('have.attr', 'src').should('include', 'chow')
  })

  it('When the user visits the homepage, they are given some insight into what breed of dog the random image is an example of:', () => {
    cy.get('.dog-breed-tag')
    .should('be.visible').should('exist')
    .contains('Search For: chow')
  })

  it('When the user visits the homepage, they should see a dropdown menu to select from a list of breeds to trigger a search:', ()=> {
    cy.get('.breed-selector')
  })
})