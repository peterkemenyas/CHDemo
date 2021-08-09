/// <reference types="Cypress"/>
import LoginPage from '../support/pageObjects/LoginPage'


describe('Login TS', ()=>{

    let username;
    let password;

    it('Login valid password valid name', () => {
        username = 'peter.kemenyas@protonmail.ch';
        password = 'PasCra194613';

        const loginPage = new LoginPage();
        const coOwnership = loginPage.login(username, password);
        coOwnership.verifyProfileName('P. Kemenyas');
        
        /*
        cy.visit('/login')
        cy.get('[data-testid="email"]').type('peter.kemenyas@protonmail.ch')
        cy.get('[data-testid="password"]').type('PasCra194613')
        cy.get('button[type="submit"]').contains('Einloggen').click()
        cy.get('[data-testid="header-content"]').contains('P. Kemenyas').should('be.visible')
        */

    })
})