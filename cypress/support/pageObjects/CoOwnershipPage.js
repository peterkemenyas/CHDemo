/// <reference types="Cypress"/>


class CoOwnership{

    constructor(){}

    header = '[data-testid="header-content"]'

    verifyProfileName(profileName){
        cy.get(this.header).contains(profileName).should('be.visible')
        return this;
    }

    
}

export default CoOwnership;