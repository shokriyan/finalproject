package stepdefinations;


import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.When;
import utils.BaseClass;

public class RegistrationSteps extends BaseClass {
	


	@When("^Click on Sign up Link$")
	public void click_on_Sign_up_Link() throws Throwable {
		Thread.sleep(3000);

		WebElement signUpLink = driver.findElement(By.linkText("Sign Up"));
		
		signUpLink.click();
		
		
	}
	
	@When("^fill up the information$")
	public void fill_up_the_information(DataTable infoTable) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		
		List<Map<String, String>> maps = infoTable.asMaps(String.class, String.class);
		
		for (Map<String, String>mapsCell:maps) {
			
			String payPlan = mapsCell.get("payPlan");
			WebElement planid = driver.findElement(By.id("payment_plan_id"));
			Select select = new Select(planid);
			select.selectByVisibleText(payPlan);
			
			
			String firstName = mapsCell.get("firstName");
			driver.findElement(By.name("first_name")).sendKeys(firstName);
			String lastName = mapsCell.get("lastName");
			driver.findElement(By.name("surname")).sendKeys(lastName);
			
			String email = mapsCell.get("email");
			
			driver.findElement(By.name("email")).sendKeys(email);
			driver.findElement(By.name("email_confirm")).sendKeys(email);
			
			String username = mapsCell.get("username");
			driver.findElement(By.name("username")).sendKeys(username);
			
			String password = mapsCell.get("password");
			driver.findElement(By.name("password")).sendKeys(password);
			driver.findElement(By.name("passwordconfirm")).sendKeys(password);
			
			WebElement agreeTermBox = driver.findElement(By.name("agreeTerms"));
			if (!agreeTermBox.isSelected()) {
				agreeTermBox.click();
			}
			
		}
		
		
	}
	
	@When("^fill up the information \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and$")
	public void fill_up_the_information_and_and_and_and_and_and(String payPlan, String firstName, String lastName, String email, String username, String password) throws Throwable {
		
		WebElement planid = driver.findElement(By.id("payment_plan_id"));
		Select select = new Select(planid);
		select.selectByVisibleText(payPlan);
		
		driver.findElement(By.name("first_name")).sendKeys(firstName);
		driver.findElement(By.name("surname")).sendKeys(lastName);
		
		
		driver.findElement(By.name("email")).sendKeys(email);
		driver.findElement(By.name("email_confirm")).sendKeys(email);
		
		driver.findElement(By.name("username")).sendKeys(username);
		
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.name("passwordconfirm")).sendKeys(password);
		
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
