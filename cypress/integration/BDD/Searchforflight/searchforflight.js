/// <reference types="cypress"  />
// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Check if the error is the one you want to ignore
        if (err.message.includes('Sys is not defined')) {
            // Return false to prevent Cypress from failing the test
            return false;
        }
        // Let other errors still fail the test
        return true;
    });
})

// Scenario: Validate Successful flight Search
Given('i navigate to Flyairpeace website', () => {
    cy.visit('https://www.flyairpeace.com/');
    cy.wait(5000)
})
Then('i click on one way trip type button', () => {
    // cy.get('input[type="radio"]').first().check()
    cy.get('input[type="radio"]').check('ONE_WAY', { force: true });
    // cy.get('#oneWay').check("ONE_WAY")
})
When('i click on the From input field and select departure location', () => {
    cy.wait(3000)
    // cy.get('#departure').select("option[value='ANA']")
    cy.get('#departure').select("Ilorin (ILR)", { force: true });
})
When('i click on the To input field and select arrival location', () => {
    cy.wait(3000)
    cy.get('#arrival').select('Abuja (ABV)', { force: true });
})
When('i select departure date', () => {
    cy.get('#dateOfDepart').click();
    cy.get('#dateOfDepart').type('2024-08-10');

})
When('i select number of adult, child and infant', () => {
    cy.get("select[name='adult']").select('2 Adult (12yrs+)');
    cy.get("select[name='child']").select('1');
    cy.get("select[name='infant']").select('1');

})
Then('i click on search for flight', () => {
    //  cy.get("button[onclick='searchAvailability()']").click();
    cy.get("button[onclick='searchAvailability()']", { timeout: 30000 }).invoke("removeAttr", "target")
        .click();
})

Then('i veryfy successful flight search', () => {
    // cy.wait('3000')
    // cy.get('.page-title').contains('Book a Flight').should('exist')


})
// Then('i click on round trip type button', () => {
//     // cy.get('input[type="radio"]', {force: true}).check('ROUND_TRIP');
//     cy.get('input[type="radio"]').check('ROUND_TRIP', { force: true });
// })
// When('i select return date', () => {
//     cy.get('#dateOfReturn').click();
//     cy.get('#dateOfReturn').type('2024-09-10');
// })
