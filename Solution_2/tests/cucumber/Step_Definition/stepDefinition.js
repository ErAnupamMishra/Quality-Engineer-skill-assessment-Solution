/** Scenarios/Step Definition file for Amazon E2E shopping
#Author: anupam.mishra13@gmail.com
#Version : 1.0 
#Status :Published
#Summary : Automation Framework in protractor using Cucumber as BDD Tool for Amazon Shopping E2E Scenario 
*/
const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

Given('I want to open Browser and launch Amazon URL',{timeout: 5 * 5000}, async () => {
  // To open Google Chrome for Amazon shopping
  console.log('login');    
  return browser.driver.get("http://www.amazon.com.au/");    
   
});

Given('Verify the page title of Amazon page', async () => {
  // Verifying title for homepage of amazon 
  const title = await browser.driver.getTitle();
  console.log('TITLE = ', title);
   expect(title).to.be.equal("Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more");
});

Given('I click on Sign-In button',{timeout: 5 * 5000}, async () => {  
  // Clicking on Sign in page for Amazon
  var e1 = browser.driver.findElement(By.id('nav-hamburger-menu'));  
  e1.click();    
  browser.sleep(1000);
  var e2 = browser.driver.findElement({id:'hmenu-customer-name'});   
   e2.click();  
  const title2 = await browser.driver.getTitle();
  expect(title2).to.be.equal("Amazon Sign In");
  console.log('Sign-in page login title validated  = ', title2);

});
 
Given('I enter Username with Password', {timeout: 5 * 5000}, async () => {
  // To Enter Username and Password on Amazon Login Page  
  var e3 = browser.driver.findElement(By.id('ap_email'));
  e3.click();
  e3.sendKeys('anupam.mishra13@gmail.com');   
  console.log('Provided User Email login');
  browser.driver.findElement(By.id('continue')).click();
  var e4 = browser.driver.findElement(By.id('ap_password'));
  e4.click();
  e4.sendKeys('amazon&07');
  console.log('Provided User Password');
  browser.driver.findElement(By.id('signInSubmit')).click();  
  const title3 = await browser.driver.getTitle();
  expect(title3).to.be.equal("Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more");
  console.log('Title 3 validated = ', title3);
  });


  
  When('I search for an item',{timeout: 5 * 5000}, async () => {
    // Search for item here it is The Bhagvad Gita Book
    var e5 = browser.driver.findElement(By.id('twotabsearchtextbox'));
    e5.click();
    e5.sendKeys('The Bhagavad Gita');   
    console.log('Provided item Bhagvad Gita in Search tab');
    var e6 = browser.driver.findElement(By.xpath("//*[@id='nav-search']/form/div[2]/div/input"));
    e6.click();       
    console.log('Book is Searched');    
    const title4 = await browser.driver.getTitle();      
    expect(title4).to.be.equal("Amazon.com.au: The Bhagavad Gita");
    console.log('TITLE4 validated = ', title4); 
  });



  When('I select the item',{timeout: 5 * 5000}, async () => {
    // Select the required Bhagvad gita book from displayed results
    var e7 = browser.driver.findElement(By.xpath("//span[contains(@class,'a-size-medium a-color-base a-text-normal') and contains(text(),'The Bhagavad Gita')]"));
    e7.click();      
    console.log('Selected the Bhagvad gita book from result');
    const title5 = await browser.driver.getTitle();
    expect(title5).to.be.equal("The Bhagavad Gita: Eknath Easwaran: Amazon.com.au: Books");  
    console.log('TITLE 5 validated = ', title5);   
  });



  When('I click on Add to Cart button',{timeout: 5 * 5000}, async () => {
    // Adding the item to cart
    var e8 = browser.driver.findElement(By.xpath("//*[@id='add-to-cart-button']"));
    e8.click();      
    console.log('Click on add to cart Button');
    const title8 = await browser.driver.getTitle();
    console.log('TITLE 8 validated = ', title8);   
    expect(title8).to.be.equal("Amazon.com.au Shopping Cart"); 
    var e9 = browser.driver.findElement(By.xpath("//*[@id='hlb-ptc-btn-native']"));
    e9.click();      
    console.log('Clicked on Checkout Button');
    const title9 = await browser.driver.getTitle();     
    expect(title9).to.be.equal("Amazon.com.au Checkout");  
    console.log('TITLE9 validated = ', title9);  
    
  }); 



  Then('I validate the Title {string}', function (string) {
    //Validation of title with data input      
    expect(string).to.be.equal("Amazon.com.au Checkout");     
    console.log('Validated Checkout page with data input function'); 
    return(string);   
  });



  Then('I click on Proceed to Checkout button',{timeout: 5 * 5000}, async () => {
    // Selecting Delivery address in Checkout
    var e10 = browser.driver.findElement(By.id('shipToThisAddressButton'));
    e10.click();      
    console.log('Click on Deliver to this address button');
    const title10 = await browser.driver.getTitle();
    expect(title10).to.be.equal("Amazon.com.au Checkout");
    console.log('TITLE 10  validated= ', title10);       
      
  });
  


  Then('I Enter the Card Details', {timeout: 8 * 5000}, async () => {
    /// Providing Dummy Card details for transaction, it will fail here
		// Treating as Last step for Code
    var e11, e12;
    browser.sleep(4000);
    e11 = browser.driver.findElement(By.xpath("//*[@name='addCreditCardNumber']"));
    e11.click();
    e11.sendKeys('1234567912345678'); 
    console.log('Providing dummy Card Number');

    e12 = browser.driver.findElement(By.xpath("//*[@name='ppw-accountHolderName']"));
    e12.click();
    e12.sendKeys('Anupam Mishra');
    e13 = browser.driver.findElement(By.xpath("//*[@name='ppw-widgetEvent:AddCreditCardEvent']"));
    e13.click();      
    console.log('Dummy Card Details are added... End of Code!!');    
    const title11 = await browser.driver.getTitle();
    console.log('TITLE11 validated = ', title11);   
    expect(title11).to.be.equal("Amazon.com.au Checkout");  
   
  });

/*
	  Other features can be used as follows : Log Out of Amazon Successfully
	  (if transaction is Successful) Success in step Failure in step
	
	  @And("^I log out of Amazon successfully$") public void
	  I_log_out_of_Amazon_successfully() throws Throwable { // Express the
	  Regexp above with the code you wish you had throw new PendingException();
	  }
	 
	 @Then("^I verify the success in step$") public void
	 I_verify_the_success_in_step() throws Throwable { // Express the Regexp
	 above with the code you wish you had throw new PendingException(); }
	 
	 @Then("^I verify the Fail in step$") public void
	 I_verify_the_Fail_in_step() throws Throwable { // Express the Regexp
	  above with the code you wish you had throw new PendingException(); }
	 */