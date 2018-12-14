Feature: LoginFeature

  @first
  Scenario: valid login
    Given I Open browser
    And I navigate to the FreaCrm
    When I enter "mshokriyan" and "123456Ab"
    And I click login button
    Then I successfully logged in as "Mohammad Shokriyan"
    And I Close browser

  @second
  Scenario Outline: invalid login
    Given I Open browser
    And I navigate to the FreaCrm
    When I enter "<username>" and "<password>"
    And I click login button
    Then I should receive error massage
    And I Close browser

    Examples: 
      | username       | password   |
      | mohammadshokhi | 1234567890 |

  @third
  Scenario: valid username and Invalid Password
    Given I Open browser
    And I navigate to the FreaCrm
    When I enter "mshokriyan" and "Ab12344555"
    And I click login button
    Then I should receive error massage
    And I Close browser
