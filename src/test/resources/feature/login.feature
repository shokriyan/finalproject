Feature: LoginFeature

  Scenario: valid login
    Given I Open browser
    And I navigate to the FreaCrm
    When I enter valid username and password
    And I click login button
    Then I successfully logged in
    And I Close browser

  Scenario: invalid login
    Given I Open browser
    And I navigate to the FreaCrm
    When I enter invalid username and password
    And I click login button
    Then I should receive error massage
    And I Close browser
