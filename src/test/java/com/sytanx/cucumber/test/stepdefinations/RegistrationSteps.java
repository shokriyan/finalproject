package com.sytanx.cucumber.test.stepdefinations;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.When;

public class RegistrationSteps {
	
	WebDriver driver;

	@When("^Click on Sign up Link$")
	public void click_on_Sign_up_Link() throws Throwable {
		

		WebElement signUpLink = driver.findElement(By.linkText("Sign Up"));
		
		signUpLink.click();
		
		
	}

	@When("^Fill up the registration form$")
	public void fill_up_the_registration_form() throws Throwable {
		WebElement planid = driver.findElement(By.id("payment_plan_id"));
		Select select = new Select(planid);
		select.selectByVisibleText("Free Edition");
		
		driver.findElement(By.name("first_name")).sendKeys("Mohammad");
		driver.findElement(By.name("surname")).sendKeys("Shokriyan");
		driver.findElement(By.name("email")).sendKeys("msh_bigstar@yahoo.com");
		driver.findElement(By.name("email_confirm")).sendKeys("msh_bigstar@yahoo.com");
		driver.findElement(By.name("username")).sendKeys("msh_bigstar");
		driver.findElement(By.name("password")).sendKeys("123456Ab");
		driver.findElement(By.name("passwordconfirm")).sendKeys("123456Ab");
		
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
