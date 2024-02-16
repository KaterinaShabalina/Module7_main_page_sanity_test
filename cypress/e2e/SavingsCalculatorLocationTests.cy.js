
import { data } from '../fixtures/CanadianStateData.json'
import { data } from '../fixtures/CanadianStateCityData.json'


describe('template spec', () => {

  const state_list = '[name="nastates"]'
  const city_list = '[name="stage2"]'

  beforeEach(() => {
    cy.visit('/savings-calculator')
  })

  it('choses province from the list', () => {
    data.forEach(element => {
      cy.get(state_list).should('be.visible')
      cy.get(state_list).select(element.CanadianState).invoke('text').should('contain', element.CanadianState)
    })

    it('verifies each province has at least one city on the list', () => {
      data.forEach(element => {
        cy.get(state_list).select(element.state).invoke('text').should('contain', 'element.state')
        cy.get(city_list).select(element.city).invoke('text').should('contain', 'element.city')

      })
    })
  })
})