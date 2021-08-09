/// <reference types="Cypress"/>
import CoOwnership from '../../support/pageObjects/CoOwnershipPage';


class LoginPage{

    constructor(){}

    loginUrl = '/login';
    emailTxt = '[data-testid="email"]';
    passwordTxt = '[data-testid="password"]';
    loginBtn = 'button[type="submit"]';

    visit(){
        cy.visit(this.loginUrl);
    }

    fillEmail(username){
        const field = cy.get(this.emailTxt);
        field.clear();
        if(username==''){
            return this;
        } else {
            field.type(username, {delay: 100});
        }
        return this;
    }

    fillPassword(password){
        const field = cy.get(this.passwordTxt);
        field.clear;
        if(password == ''){
            return this;
        } else {
            field.type(password, {delay:100});
        }
    }

    clickSubmit(){
        const button = cy.get(this.loginBtn);
        button.click();
    }

    login(username, password){
        this.visit();
        this.fillEmail(username);
        this.fillPassword(password);
        this.clickSubmit();
        return new CoOwnership();
    }

}

export default LoginPage;