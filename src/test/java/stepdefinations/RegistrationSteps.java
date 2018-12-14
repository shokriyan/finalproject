package stepdefinations;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class RegistrationSteps {
	
	WebDriver driver;


	@When("^Click on Sign up Link$")
	public void click_on_Sign_up_Link() throws Throwable {
		

		WebElement signUpLink = driver.findElement(By.linkText("Sign Up"));
		
		signUpLink.click();
		
		
	}

	@When("^Fill up \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void fill_up_and_and_and_and(String edition, String fname, String lname, String email, String uname, String pass) throws Throwable {
		WebElement planid = driver.findElement(By.id("payment_plan_id"));
		Select select = new Select(planid);
		select.selectByVisibleText(edition);
		
		driver.findElement(By.name("first_name")).sendKeys(fname);
		driver.findElement(By.name("surname")).sendKeys(lname);
		driver.findElement(By.name("email")).sendKeys(email);
		driver.findElement(By.name("email_confirm")).sendKeys(email);
		driver.findElement(By.name("username")).sendKeys(uname);
		driver.findElement(By.name("password")).sendKeys(pass);
		driver.findElement(By.name("passwordconfirm")).sendKeys(pass);
		
		WebElement agreeTermBox = driver.findElement(By.name("agreeTerms"));
		if (!agreeTermBox.isSelected()) {
			agreeTermBox.click();
		}
	}

	@When("^Click on submit$")
	public void click_on_submit() throws Throwable {
	    WebElement btnSubmit = driver.findElement(By.name("submitButton"));
	    btnSubmit.click();
	}


}
