// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(populateAllFieldsStep1, (state_list, city_list, stories, square_feet, years) => {
    cy.get(state_list).select(state_list, { force: true })
    cy.get(city_list).select(city_list, { force: true })
    cy.get(stories).select(stories, { force: true })
    cy.get(square_feet).select(square_feet, { force: true })
    cy.get(years).clear().type(years, { force: true })
})

Cypress.Commands.add(indicatesSavings, (current_heating_system, new_heating_system) =>{
    cy.get(current_heating_system).select(current_heating_system, { force: true })
    cy.get(new_heating_system).select(new_heating_system, { force: true })

})














