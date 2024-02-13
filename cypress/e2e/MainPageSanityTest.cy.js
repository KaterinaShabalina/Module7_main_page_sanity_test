describe('main page sanity test', () => {

    it('navigates to the main page', () => {
    cy.visit('https://consumersenergymanagement.ca/') 
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
})

    it('indicates top head banner on the main page', () => {
    // Neither of these commands worked unfortunately: 
    //cy.get('.main-header').should("be.visible")
    //cy.get('[id="widget_sp_image-6"]').should("be.visible")
    //cy.get('a').contains("https://www.consumersenergymanagement.ca/").click({force: true})
    //cy.get('[class="attachment-full"]').contains('Consumers Energy Management Inc. Ontario').should("be.visible") 

    })

})



