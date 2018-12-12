$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mohammadshokriyan/eclipse-workspace/finalcucumber/src/test/resources/feature/Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterFeature",
  "description": "",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Creating accout",
  "description": "",
  "id": "registerfeature;creating-accout",
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
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Fill up the registration form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on submit",
  "keyword": "And "
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
  "duration": 1859532797,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 3012079251,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 2304047,
  "error_message": "java.lang.NullPointerException\n\tat com.sytanx.cucumber.test.stepdefinations.RegistrationSteps.click_on_Sign_up_Link(RegistrationSteps.java:19)\n\tat ✽.When Click on Sign up Link(/Users/mohammadshokriyan/eclipse-workspace/finalcucumber/src/test/resources/feature/Register.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationSteps.fill_up_the_registration_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});