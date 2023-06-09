Cypress.Commands.add('loadMainPage', () => {
  cy.intercept('GET', "https://dog.ceo/api/breeds/image/random", {
      fixture: "oneDog.json"
    })
});

Cypress.Commands.add('loadResultsPage', () => {
cy.intercept('GET', "`https://dog.ceo/api/breed/pitbull/images/random/12`", {
    fixture: "multipleDogs.json"
  })
cy.intercept('GET', "https://dog.ceo/api/breed/kelpie/images/random/12", {
    fixture: "zeroDogs.json"
  })
});