describe('template spec', () => {

  const state_list = '[name="nastates"]'
  const city_list = '[name="stage2"]'

  beforeEach(() => {
    cy.visit('/savings-calculator')
  })

  it('choses province from the list', () => {
    cy.get(state_list).should('be.visible')
    cy.get(state_list).select('Texas').invoke('text').should('contain', 'Texas')
  })

  it('verifies each province has at least one city on the list', () => {
    cy.get(state_list).should('be.visible')
    cy.get(state_list).select('Texas')
    cy.get(city_list).should('be.visible')
    cy.get(city_list).should('be.visible').select('TX-Abilene')

    })

  })




