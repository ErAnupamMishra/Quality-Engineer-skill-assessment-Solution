#Feature file for Amazon E2E shopping
#Author: anupam.mishra13@gmail.com
#Version : 1.0
#Status :Published
#Summary : Automation Framework in Selenium using Cucumber as BDD Tool for Amazon Shopping E2E Scenario
#Problem 2 :Create a test automation framework and write end-to-end test scenario to cover at least one customer journey on Amazon/eBay website.
Feature: Amazon customer E2E Journey for Buying  Bhagvad Gita book.

  Scenario Outline: Login in Amazon,search for an item, add to cart, proceed to checkout and provide my personal and dummy payment details to purchase an item.

    Given I want to open Browser and launch Amazon URL
    Given Verify the page title of Amazon page 
    Given I click on Sign-In button      
    Given I enter Username with Password   
    When I search for an item
    When I select the item
    When I click on Add to Cart button
    Then I validate the Title "<Shopping Cart Title>"    
    Then I click on Proceed to Checkout button
    Then I Enter the Card Details

    Examples: 
      | Shopping Cart Title    |
      | Amazon.com.au Checkout |


