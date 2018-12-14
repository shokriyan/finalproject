package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature",glue={"stepdefinations"}, 
dryRun = false, 
plugin = {"html:test-output" }
, monochrome = true

)

public class testRunner {

}
