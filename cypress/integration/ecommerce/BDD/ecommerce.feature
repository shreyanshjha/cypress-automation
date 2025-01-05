Feature: End to end ecommerce validation suite
  Scenario: Ecommerce products delivery
    Given I am on ecommerce page
    When I login to the application
    And I add items to cart and Checkout
    And Validate the total price limit
    Then Select the country submit and verify Thankyou

#  Scenario: Ecommerce products delivery cucumber driver
#    Given I am on ecommerce page
#    When I login to the application portal
#    | username            | password |
#    | rahulshettyacademy  | learning |
#    And I add items to cart and Checkout
#    And Validate the total price limit
#    Then Select the country submit and verify Thankyou