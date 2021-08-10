/// <reference types="Cypress"/>
import LoginPage from '../support/pageObjects/LoginPage'


/*describe('Login TestSuite', ()=>{

    let username;
    let password;

    it('Login - correct username and correct password', () => {
        username = 'peter.kemenyas@protonmail.ch';
        password = 'PasCra194613';

        const loginPage = new LoginPage();
        const coOwnership = loginPage.login(username, password);
        coOwnership.verifyProfileName('P. Kemenyas');
        
        /*
        Example of non Page Object test implementation
        cy.visit('/login')
        cy.get('[data-testid="email"]').type('peter.kemenyas@protonmail.ch')
        cy.get('[data-testid="password"]').type('PasCra194613')
        cy.get('button[type="submit"]').contains('Einloggen').click()
        cy.get('[data-testid="header-content"]').contains('P. Kemenyas').should('be.visible')
        
    })

    it('Login - incorrect username and correct password', () => {
        username = 'peter.WRONG@protonmail.ch';
        password = 'PasCra194613';

        const loginPage = new LoginPage();
        loginPage.login(username, password);
        loginPage.verifyErrorMessage('Die eingegebene E-Mail-Adresse oder das Passwort ist falsch.');

    })

    it('Login - correct username and incorrect password', () => {
        username = 'peter.kemenyas@protonmail.ch';
        password = 'PasCraWRONG';

        const loginPage = new LoginPage();
        loginPage.login(username, password);
        loginPage.verifyErrorMessage('Die eingegebene E-Mail-Adresse oder das Passwort ist falsch.');

    })

    it('Login - icorrect username and incorrect password', () => {
        username = 'peter.WRONG@protonmail.ch';
        password = 'PasCraWRONG';

        const loginPage = new LoginPage();
        loginPage.login(username, password);
        loginPage.verifyErrorMessage('Die eingegebene E-Mail-Adresse oder das Passwort ist falsch.');

    })
})*/

describe('Login form validation TestSuite', () => {
    let username
    let password

    it('Valid username',()=>{
        username = 'valid.format@valid.format';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillEmail(username);
        loginPage.verifyEmailValidationMsg('Bitte geben Sie eine gültige E-Mail-Adresse ein.', false);
        
    })

    it('Invalid username',()=>{
        username = 'invalid.format@invalid';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillEmail(username);
        loginPage.unfocusEmail();
        loginPage.verifyEmailValidationMsg('Bitte geben Sie eine gültige E-Mail-Adresse ein.', true);
        
    })

    it('Valid password',()=>{
        password = '003456789dfg';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillPassword(password);
        loginPage.unfocusPassword();
        loginPage.verifyPasswordValidationMsg('Ihr Passwort muss mindestens 6 Zeichen lang sein.', false);
        
    })

    it('Empty password',()=>{
        password = '';
        username = 'valid.format@valid.format';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillEmail(username)
        loginPage.fillPassword(password);
        loginPage.unfocusPassword();
        loginPage.verifyPasswordValidationMsg('Ihr Passwort muss mindestens 6 Zeichen lang sein.', true);
        
    })

    it('Empty email',()=>{
        username = '';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillEmail(username)
        loginPage.unfocusEmail();
        loginPage.verifyEmailValidationMsg('Bitte geben Sie eine gültige E-Mail-Adresse ein.', true);
    })
})