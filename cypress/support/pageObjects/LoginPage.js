/// <reference types="Cypress"/>
import CoOwnership from '../../support/pageObjects/CoOwnershipPage';


class LoginPage{

    constructor(){}

    loginUrl = '/login';
    emailInp = '[name="email"][type="text"]';
    emailTxt = '[data-testid="email"]';
    PasswordInp = '[name="password"][type="password"]';
    passwordTxt = '[data-testid="password"]';
    loginBtn = 'button[type="submit"]';
    errorMsgPnl = 'div.Login_alert__1oxaM';
    errorMsg = 'div.MuiAlert-message'

    visit(){
        cy.visit(this.loginUrl);
    }

    fillEmail(username){
        const field = cy.get(this.emailTxt);
        field.clear();
        if(username==''){
            return this;
        } else {
            field.type(username);
        }
        return this;
    }

    fillPassword(password){
        const field = cy.get(this.passwordTxt);
        field.clear;
        if(password == ''){
            cy.get(this.PasswordInp).focus();
        } else {
            field.type(password);
        }
        return this;
    }

    clickSubmit(){
        const button = cy.get(this.loginBtn);
        button.click();
    }

    unfocusEmail(){
        const field = cy.get(this.PasswordInp);
        field.focus(); 
    }

    unfocusPassword(){
        const field = cy.get(this.emailInp);
        field.focus(); 

    }

    login(username, password){
        this.visit();
        this.fillEmail(username);
        this.fillPassword(password);
        this.clickSubmit();
        return new CoOwnership();
    }

    verifyErrorMessage(message){
        cy.get(this.errorMsgPnl).within(()=>{
            cy.get(this.errorMsg).should('have.text', message);
        })
    }

    verifyEmailValidationMsg(message, isDisplayed){
        if(isDisplayed){
            cy.get(this.emailTxt).within(()=>{
                cy.contains(message).should('be.visible')
            })       
        } else {
            cy.get(this.emailTxt).within(()=>{
                cy.contains(message).should('not.exist')
            })
        }
    }

    verifyPasswordValidationMsg(message, isDisplayed){
        if(isDisplayed){
            cy.get(this.passwordTxt).within(()=>{
                cy.contains(message).should('be.visible')
            })       
        } else {
            cy.get(this.passwordTxt).within(()=>{
                cy.contains(message).should('not.exist')
            })
        }
    }

}

export default LoginPage;