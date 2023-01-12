Feature: End to End E commerce Validation

    Application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify thank you