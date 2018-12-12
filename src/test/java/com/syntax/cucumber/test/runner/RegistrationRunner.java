package com.syntax.cucumber.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/mohammadshokriyan/eclipse-workspace/finalcucumber/src/test/resources/feature/Register.feature", glue = ""
	,plugin= {"pretty","html:test-output"}
	,dryRun=false
	,monochrome=true
		)
public class RegistrationRunner {

}
