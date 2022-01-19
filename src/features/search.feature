Feature: Test Feature
  This is the feature description
  The feature will test basic interactions with the broswser

  Background:
    This is the Background
    Any common step for the scenarios can be written here

    Given The landing page is shown
    And I agree with the cookies policy if asked

  @smoke-test
  Scenario: Test Scenario for insert, click and validation
    This is the scenario description
    The scenario tests a simple insert, click and page validation

    When I insert "WebdriverIO" in the input
    And I press the search button
    Then I should see the next page


  Scenario Outline: Test Scenario for multiple cases at once
    This is the scenario description
    The scenario tests the possibility to use a single scenario for multiple entries

    When I insert <text> in the input
    And I press the search button
    Then I should see the next page

    Examples:
      | text         |
      | "Cucumber"   |
      | "TypeScript" |
