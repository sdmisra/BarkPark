describe('Search Results Spec:', () => {

  beforeEach(()=> {
    cy.loadMainPage()
    cy.loadResultsPage()
    cy.visit('http://localhost:3000')
    cy.get('.breed-selector').select('pitbull')
    cy.get('.search-button').click()
  }) 

  it('When a user arrives on the results page (after clicking Search button), they can see multiple elements to interact with:', ()=> {

    cy.get('.more-results').should('be.visible').contains('Click for more (pitbulls):')

    cy.get('.dog-card-container')
    .should('be.visible').should('exist')

    cy.get('.dog-card-container > :nth-child(1)')
    .should('be.visible').should('exist')
    cy.get('.dog-card-container > :nth-child(2)')
    .should('be.visible').should('exist')
    cy.get('.dog-card-container > :nth-child(3)')
    .should('be.visible').should('exist')
    cy.get('.dog-card-container > :nth-child(4)')
    .should('be.visible').should('exist')

  }
  )

  it('When a user finds a picture they like, they can click on the Save Picture button here to remove it from the results and add it to their saved pictures:', () => {
    cy.get('.save-button').should('have.length', 4)

    cy.get('.save-button').first().click()
    cy.get('.save-button').should('have.length', 3)
    
    cy.get('.save-button').first().click()
    
    cy.get('.app-footer').click()
    // Checking in final view for saved photo:
    cy.get('.card-photo').should('have.length', 2)
  })

  it('When a user wishes, they can return to the dashboard by clicking the title:', ()=> {
    cy.get('.app-header').click()
  })
})

describe('SAD: Search Results Spec:', ()=> {
  beforeEach(()=> {
    cy.loadMainPage()
    cy.loadResultsPage()
    cy.visit('http://localhost:3000')
    cy.get('.breed-selector').select('kelpie')
    cy.get('.search-button').click()
  })

  it('SAD: When a user chooses a breed that returns no images, they will see an error message that requests a new search parameter', ()=> {
    cy.get('.error-message').should('exist').should('be.visible')
    .contains('No Results! Please Click the Header to try again!')
  })
})