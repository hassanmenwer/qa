describe('Feedback Functionality', () => {

    
    it('invalid company name', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('jawwal');
    });  

    it('mix of upper and lower case', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('Al andalus');
        cy.get('.item-text').contains('Al Andalus Software Development').should('be.visible');
    });  

    it('special character', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('!@#$');
        cy.get('.search-bar').should('be.visible');
    });  

    it('numbers', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('5643');
        cy.get('.search-bar').should('be.visible');
    });  

    it('one letter', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('e');
        cy.get('.item-text').contains('EXALT Technologies Ltd.').should('be.visible');
    });  

    it('multiple letter', () => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').type('iVA');
        cy.get('.item-text').contains('iVAS Communications Ltd.').should('be.visible');
    });  
});