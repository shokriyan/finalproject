$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mohammadshokriyan/eclipse-workspace/finalcucumber/src/test/resources/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "valid login",
  "description": "",
  "id": "loginfeature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"mshokriyan\" and \"123456Ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I successfully logged in as \"Mohammad Shokriyan\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 1892344561,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1477097965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mshokriyan",
      "offset": 9
    },
    {
      "val": "123456Ab",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 423546564,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 3183261149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohammad Shokriyan",
      "offset": 29
    }
  ],
  "location": "LoginSteps.i_successfully_logged_in_as(String)"
});
formatter.result({
  "duration": 44633956,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 135006932,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "invalid login",
  "description": "",
  "id": "loginfeature;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"mohammadShok\" and \"123456Ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should receive error massage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 976766277,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1432992800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohammadShok",
      "offset": 9
    },
    {
      "val": "123456Ab",
      "offset": 28
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 604309799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1466524026,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_error_massage()"
});
formatter.result({
  "duration": 26891072,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 90919096,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "valid username and Invalid Password",
  "description": "",
  "id": "loginfeature;valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \"mshokriyan\" and \"Ab12344555\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should receive error massage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 999700672,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1330815134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mshokriyan",
      "offset": 9
    },
    {
      "val": "Ab12344555",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 694434894,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1467754550,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_error_massage()"
});
formatter.result({
  "duration": 25692252,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 93244806,
  "status": "passed"
});
});