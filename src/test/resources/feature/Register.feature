Feature: RegisterFeature

  @registration
  Scenario: Creating accout with data table
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And fill up the information
      | payPlan      | firstName | lastName  | email           | username | password |
      | Free Edition | Mohammad  | Shokriyan | email@email.com | username | 123456AB |
    And Click on submit
    And I Close browser

  @registration2
  Scenario Outline: Creating accout with example
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And fill up the information "<payPlan>" and "<firstName>" and "<lastName>" and "<email>" and "<username>" and "<password>" and
    And Click on submit
    And I Close browser

    Examples: 
      | payPlan      | firstName | lastName  | email           | username    | password |
      | Free Edition | Mohammad  | Shokriyan | email@email.com | mohammad123 | 123456AB |
