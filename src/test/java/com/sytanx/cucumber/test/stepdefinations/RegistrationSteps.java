package com.sytanx.cucumber.test.stepdefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationSteps {
	
	WebDriver driver;
	
	@Given("^Open browser$")
	public void open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/driver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().fullscreen();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}

	@Given("^Navigate to FreeCRm$")
	public void navigate_to_FreeCRm() throws Throwable {
		driver.get("https://www.freecrm.com/index.html");
		
	}

	@When("^Click on Sign up Link$")
	public void click_on_Sign_up_Link() throws Throwable {
		Thread.sleep(3000);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
		wait.until(ExpectedConditions.elementToBeClickable(signUpLink));
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


	@Then("^Close Browser$")
	public void close_browser() throws Throwable {
		driver.quit();
	}

}
