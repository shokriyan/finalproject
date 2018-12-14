$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterFeature",
  "description": "",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Creating accout",
  "description": "",
  "id": "registerfeature;creating-accout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@registration"
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
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill up \"Free Edition\" and \"Mohammad\" and \"Shokriyan\" and \"msh_bigstar@yahoo.com\" and \"msh_bigstar\" and \"123456Ab\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on submit",
  "keyword": "And "
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
  "duration": 2359701378,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2100270316,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 4627284,
  "error_message": "java.lang.NullPointerException\n\tat stepdefinations.RegistrationSteps.click_on_Sign_up_Link(RegistrationSteps.java:23)\n\tat ✽.When Click on Sign up Link(feature/Register.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 9
    },
    {
      "val": "Mohammad",
      "offset": 28
    },
    {
      "val": "Shokriyan",
      "offset": 43
    },
    {
      "val": "msh_bigstar@yahoo.com",
      "offset": 59
    },
    {
      "val": "msh_bigstar",
      "offset": 87
    },
    {
      "val": "123456Ab",
      "offset": 105
    }
  ],
  "location": "RegistrationSteps.fill_up_and_and_and_and(String,String,String,String,String,String)"
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
formatter.uri("feature/login.feature");
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
  "duration": 1109511421,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 1953458341,
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
  "duration": 198715737,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1102171974,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"submit\" value\u003d\"Login\" class\u003d\"btn btn-small\"\u003e is not clickable at point (1108, 117). Other element would receive the click: \u003cdiv id\u003d\"preloader\" style\u003d\"opacity: 1;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mohammads-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8b3:1dd8:c259:dca5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/x3/smdxzkxn7d3...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59477}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: 1f302747b10914621500f1789ce108cd\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat stepdefinations.LoginSteps.i_click_login_button(LoginSteps.java:53)\n\tat ✽.And I click login button(feature/login.feature:7)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1131350559,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2268479592,
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
  "duration": 242941260,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1509537252,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_error_massage()"
});
formatter.result({
  "duration": 30489986,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 88156003,
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
  "duration": 1058887728,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2335261831,
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
  "duration": 258534533,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1530446374,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_error_massage()"
});
formatter.result({
  "duration": 34735450,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 87990607,
  "status": "passed"
});
});