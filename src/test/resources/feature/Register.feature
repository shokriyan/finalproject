Feature: RegisterFeature

  Scenario: Creating accout
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And Fill up the registration form
    And Click on submit
    And I Close browser
