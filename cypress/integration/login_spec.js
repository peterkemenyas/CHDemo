

describe('Login TS', ()=>{
    it('Login valid password valid name', () => {
        cy.visit('/login')
        cy.get('[data-testid="email"]').type('peter.kemenyas@protonmail.ch')
        cy.get('[data-testid="password"]').type('PasCra194613')
        cy.get('button[type="submit"]').contains('Einloggen').click()
        cy.get('[data-testid="header-content"]').contains('P. Kemenyas').should('be.visible')

    })
})