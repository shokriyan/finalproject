package com.sytanx.cucumber.test.stepdefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.AssertJUnit;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	public static WebDriver driver;
	WebDriverWait wait;

	@Given("^I Open browser$")
	public void i_Open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/driver/chromedriver");
		driver = new ChromeDriver();

	}

	@Given("^I navigate to the FreaCrm$")
	public void i_navigate_to_the_FreaCrm() throws Throwable {
		
		driver.get("https://www.freecrm.com/index.html");

	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String uname, String pass) throws Throwable {
		WebElement username = driver.findElement(By.xpath("//input[@placeholder='Username']"));
		username.clear();
		username.sendKeys(uname);
		
		WebElement password = driver.findElement(By.xpath("//input[@placeholder='Password']"));
		password.clear();
		password.sendKeys(pass);
		

	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		Thread.sleep(1000);
		WebElement btnLogin = driver.findElement(By.xpath("//input[@value='Login']"));
		wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(btnLogin));
		btnLogin.click();

	}

	@Then("^I successfully logged in as \"([^\"]*)\"$")
	public void i_successfully_logged_in_as(String expecteUser) throws Throwable {
		driver.switchTo().frame(1);
		WebElement homebtn = driver.findElement(By.cssSelector(
				"td.headertable table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) > td.headertext:nth-child(1)"));
		String getUser = homebtn.getText().substring(8);
		Assert.assertEquals(getUser, expecteUser);

	}

	@Then("^I should receive error massage$")
	public void i_should_receive_error_massage() throws Throwable {
		boolean exist = driver.findElement(By.xpath("//a[@class='navbar-brand']//img[@class='img-responsive']")).isDisplayed();
		Assert.assertTrue(exist);
		
	}
	
	@Then ("^I Close browser$")
	public void i_close_browser() throws Throwable {
		driver.quit();
	}

}
