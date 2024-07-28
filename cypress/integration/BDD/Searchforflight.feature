Feature: Search For Flight test validation​
Application regression​
@smoke

Scenario: Validate Successful flight Search for one way
        Given i navigate to Flyairpeace website
        Then i click on one way trip type button
        When i click on the From input field and select departure location
        When i click on the To input field and select arrival location
        When i select departure date 
        When i select number of adult, child and infant
        When i click on search for flight
        Then i veryfy successful flight search 




