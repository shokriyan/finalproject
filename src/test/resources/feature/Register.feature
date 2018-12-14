Feature: RegisterFeature

@registration
  Scenario: Creating accout
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And Fill up "Free Edition" and "Mohammad" and "Shokriyan" and "msh_bigstar@yahoo.com" and "msh_bigstar" and "123456Ab"
    And Click on submit
    And I Close browser
