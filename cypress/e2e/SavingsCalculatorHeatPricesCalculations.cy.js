
import { data } from '../fixtures/CurrentHeatingTypeData.json'
import {data} from '../fixtures/NewHeatingTypeData.json'

describe('template spec', () => {

    const state_list = '[name="nastates"]'
    const city_list = '[name="stage2"]'
    const stories = '[name="stories"]'
    const square_feet = '[name="squarefeet"]'
    const years = '[name="houseage"]'
    const current_heating_system = '[name="heattype"]'
    const current_heating_cost = '[name="currentheatingcost"]'
    const new_heating_system = '[name="heatingtype"]'
    const new_heating_cost = '[name="newheatingcost"]'
    const annual_heating_savings = '[name="annualheatingsavings"]'

    beforeEach(() => {
        cy.visit('/savings-calculator')
    })
    it('populates all fields in Step 1', () => {
        cy.populateAllFields('Nevada', 'NV-Ely', '3', '2500', '8')
        cy.get(state_list).contains('Nevada').should('be.visible')
        cy.get(city_list).contains('NV-Ely').should('be.visible')
        cy.get(stories).contains('3').should('be.visible')
        cy.get(square_feet).contains('2500').should('be.visible')
        cy.get(years).clear().type('8').should('be.visible')

    })

    it('changes price when current heating type selected', () => {
        data.forEach(element => {
            cy.get(current_heating_system).should('be.visible')
            cy.get(current_heating_system).select(element.current_heating_type).invoke('text').should('contain', current_heating_type)
            cy.get(current_heating_cost).contains('value').should('be.visible')

        })

        it('changes price when new heating type selected', () => {
            data.forEach(element => {
                cy.get(new_heating_system).should('be.visible')
                cy.get(new_heating_system).select(element.new_heating_type).invoke('text').should('contain', new_heating_type)
                cy.get(new_heating_cost).contains('value').should('be.visible')
            })

            it('indicates savings when new and old heating system selected', () => {
                cy.indicatesSavings('Natural Gas', 'Propan')
                cy.get(current_heating_system).contains('Natural Gas').should('be.visible')
                cy.get(new_heating_system).contains('Propan').should('be.visible')
                cy.get(annual_heating_savings).contains('value').should('be.visible')

            })

            it('indicates total savings when new and old heating system selected', () => {
                cy.indicatesSavings('Natural Gas', 'Propan')
                cy.get(current_heating_system).contains('Natural Gas').should('be.visible')
                cy.get(new_heating_system).contains('Propan').should('be.visible')
                cy.get('#VTES').contains('value').should('be.visible')

            })

        })
    })
})