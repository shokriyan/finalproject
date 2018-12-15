$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterFeature",
  "description": "",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Creating accout with example",
  "description": "",
  "id": "registerfeature;creating-accout-with-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@registration2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "fill up the information \"\u003cpayPlan\u003e\" and \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cemail\u003e\" and \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "registerfeature;creating-accout-with-example;",
  "rows": [
    {
      "cells": [
        "payPlan",
        "firstName",
        "lastName",
        "email",
        "username",
        "password"
      ],
      "line": 24,
      "id": "registerfeature;creating-accout-with-example;;1"
    },
    {
      "cells": [
        "Free Edition",
        "Mohammad",
        "Shokriyan",
        "email@email.com",
        "mohammad123",
        "123456AB"
      ],
      "line": 25,
      "id": "registerfeature;creating-accout-with-example;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Creating accout with example",
  "description": "",
  "id": "registerfeature;creating-accout-with-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@registration2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "fill up the information \"Free Edition\" and \"Mohammad\" and \"Shokriyan\" and \"email@email.com\" and \"mohammad123\" and \"123456AB\" and",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 2753285975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1687520134,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 3865611169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 25
    },
    {
      "val": "Mohammad",
      "offset": 44
    },
    {
      "val": "Shokriyan",
      "offset": 59
    },
    {
      "val": "email@email.com",
      "offset": 75
    },
    {
      "val": "mohammad123",
      "offset": 97
    },
    {
      "val": "123456AB",
      "offset": 115
    }
  ],
  "location": "RegistrationSteps.fill_up_the_information_and_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1035796971,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit()"
});
formatter.result({
  "duration": 540572084,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 85112231,
  "status": "passed"
});
});