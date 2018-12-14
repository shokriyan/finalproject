$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "valid login",
  "description": "",
  "id": "loginfeature;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"mshokriyan\" and \"123456Ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully logged in as \"Mohammad Shokriyan\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 2404932388,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1734836585,
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
  "duration": 500904329,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 4644821636,
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
  "duration": 41576865,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 82394952,
  "status": "passed"
});
});