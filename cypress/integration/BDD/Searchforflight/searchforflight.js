/// <reference types="cypress"  />
// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Validate Successful flight Search
Given ('i navigate to Flyairpeace website',() => {
    cy.visit('https://www.flyairpeace.com/'); 
})
Then ('i click on one way trip type button',() => {
    cy.get('input[type="radio"]').check('ONE_WAY');
})
When ('i click on the From input field and select departure location',() => {
    cy.get('.col-lg-6 > #departure').select('Lagos (LOS)');
})
When ('i click on the To input field and select arrival location',() => {
    cy.get('#arrival').select('Abuja (ABV)');
})
When ('i select departure date',() => {
     cy.get('#dateOfDepart').click();
     cy.get('#dateOfDepart').type('2024-08-10');
   
})
When ('i select number of adult, child and infant',() =>{
     cy.get("select[name='adult']").select('2 Adult (12yrs+)');
     cy.get("select[name='child']").select('1');
     cy.get("select[name='infant']").select('1');

})
Then ('i click on search for flight',() => {
     cy.get("button[onclick='searchAvailability()']").click();

})

Then ('i veryfy successful flight search',() =>{
    // cy.wait('3000')
    cy.get('.page-title').contains('Book a Flight').should('exist')

})
Then ('i click on round trip type button',() => {
    cy.get('input[type="radio"]').check('ROUND_TRIP');
})
When ('i select return date',() => {
    cy.get('#dateOfReturn').click();
    cy.get('#dateOfReturn').type('2024-09-10');
})