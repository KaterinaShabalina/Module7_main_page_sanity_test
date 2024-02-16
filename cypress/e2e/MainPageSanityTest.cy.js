describe('main page sanity test', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the main page', () => {

    })

    it('indicates that h1 element containt title', () => {
        cy.get('.about-lrt > :nth-child(1)').should("contain", " About ")

    })

})