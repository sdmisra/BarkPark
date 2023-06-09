describe('Saved View Spec, Happy Paths:', () => {

  beforeEach(()=> {
    cy.loadMainPage()
    cy.loadResultsPage()
    cy.visit('http://localhost:3000')
    cy.get('.breed-selector').select('pitbull')
    cy.get('.search-button').click()

    cy.get('.save-button').first().click()
    cy.get('.save-button').first().click()

    cy.get('.app-footer').click()
  })

  it('When a user: loads the app, selects a breed, and clicks on multiple save buttons, those same images should appear when the User choses to go to the results page:', () => {
    cy.get('.card-photo').should('have.length', 2)
  })

  it('When a user clicks the "remove picture" button, it is removed from the view AND the state of App', ()=> {

    cy.get('.delete-button').first().click()
    cy.get('.card-photo').should('have.length', 1)

    cy.get('.app-header').click()
    cy.get('.app-footer').click()

    cy.get('.card-photo').should('have.length', 1)
  })
})

describe('SAD: Saved View Spec:', ()=> {
  beforeEach(()=> {
    cy.loadMainPage()
    cy.loadResultsPage()
    cy.visit('http://localhost:3000')

    cy.get('.app-footer').click()
  })

  it('SAD: When a user comes to the saved pictures page without clicking anything, they see a message indicating how to add to it', ()=> {
    cy.get('.card-photo').should('not.exist')

    cy.get('.error-message').should('be.visible')
    .contains('No dog pictures are currently saved! Please hit the Welcome Banner to start searching and saving.')
  })
})