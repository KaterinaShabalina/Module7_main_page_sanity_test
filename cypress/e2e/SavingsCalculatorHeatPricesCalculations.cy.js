describe('template spec', () => {

    const state_list = '[name="nastates"]'
    const city_list = '[name="stage2"]'
    const stories = '[name="stories"]'
    const square_feet = '[name="squarefeet"]'
    const current_heating_system = '[name="heattype"]'
    const current_heating_cost = '[name="currentheatingcost"]'
    const new_heating_system = '[name="heatingtype"]'
    const new_heating_cost = '[name="newheatingcost"]'
    const annual_heating_savings = '[name="annualheatingsavings"]'


    beforeEach(() => {
        cy.visit('/savings-calculator')
    })
    it('populates all fields in Step 1', () => {
        //cy.get(state_list).should('be.visible')
        //cy.get(state_list).select('Nevada', {force:true})
        //cy.get('[value="Nevada"]').should('be.visible')
        //cy.get(city_list).should('be.visible')
        //cy.get(city_list).select('NV-Ely', {force:true})
        //cy.get('[value="NV-Ely"]').should('be.visible')
        //cy.get(stories).should('be.visible')
        //cy.get(stories).select('3')
        //cy.get('[value="3"]').should('be.visible')
        //cy.get(square_feet).should('be.visible')
        //cy.get(square_feet).select('2500')
        //cy.get('[value="2500"]').should('be.visible')
        //cy.get('.Txtss').clear().type("8")

    })

    it('changes price when Natural Gas heating type selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select('Natural Gas')
        //cy.get(current_heating_cost).contains('value1').should('be.visible')

    })

    it('changes price when Propan heating type selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select('Propan')
        //cy.get(current_heating_cost).contains('value2').should('be.visible')

    })

    it('changes price when Oil heating type selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select('Oil')
        //cy.get(current_heating_cost).contains('value3').should('be.visible')

    })

    it('changes price when Electric heating type selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select('Electric')
        //cy.get(current_heating_cost).contains('value4').should('be.visible')

    })

    it('changes price when heating type is Heat Pump', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select('Heat Pump')
        //cy.get(current_heating_cost).contains('value5').should('be.visible')

    })


    it('changes price when new heating type is Natural Gas', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Natural Gas')
        //cy.get(new_heating_cost).contains('value1').should('be.visible')
    })

    it('changes price when new heating type is Propan', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Propan')
        //cy.get(new_heating_cost).contains('value2').should('be.visible')
    })

    it('changes price when new heating type is Oil', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Oil')
        //cy.get(new_heating_cost).contains('value3').should('be.visible')
    })

    it('changes price when new heating type is Electric', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Electric')
        //cy.get(new_heating_cost).contains('value4').should('be.visible')
    })

    
    it('changes price when new heating type is Heat Pump', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Heat Pump')
        //cy.get(new_heating_cost).contains('value5').should('be.visible')
    })


    it('changes price when new heating type is Dual Fuel-Natural Gas', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Dual Fuel-Natural Gas')
        //cy.get(new_heating_cost).contains('value6').should('be.visible')
    })


    it('changes price when new heating type is Dual Fuel-Oil', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Dual Fuel-Oil')
        //cy.get(new_heating_cost).contains('value7').should('be.visible')
    })

    it('changes price when new heating type is Dual Fuel-Propan', () => {
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select('Dual Fuel-Propan')
        //cy.get(new_heating_cost).contains('value8').should('be.visible')
    })

    it('indicates savings when new and old heating system selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select().should('have.value')
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select().should('have.value')
        //cy.get(annual_heating_savings).should('be.visible')
        //cy.get(annual_heating_savings).should('have.value')

    })

    it('displays total savings when new and old heating system selected', () => {
        //cy.get(current_heating_system).should('be.visible')
        //cy.get(current_heating_system).select().should('have.value')
        //cy.get(new_heating_system).should('be.visible')
        //cy.get(new_heating_system).select().should('have.value')
        //cy.get('#VTAS').should('be.visible')
        //cy.get('#VTAS').contains('value')
        //cy.get('#VTES').should('be.visible')
        //cy.get('#VTES').contains('value')

    })

})
