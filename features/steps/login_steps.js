var LoginPage = require('../pageobjects/login.page');
var expect = require('chai').expect //this should be in some configuration file

module.exports = function given() {
  this.Given(/^I open visp webapp$/, function() {
		
       LoginPage.open();
	   
		//console.log('this should not fail');
	
  });

  
  this.When('I fillout in login as "$username" and password as "$password"', function(login, password) {
    
	  
	  LoginPage.username.waitForExist();
	  LoginPage.username.setValue(login);
	  LoginPage.passwordf.setValue(password);
	  LoginPage.logbutton.click();
	
  });

  this.Then('I see the "$dashboard"', function(dashboard) {
	  
   
		
		LoginPage.notify.waitForExist();
		LoginPage.dashboard.getText();
		LoginPage.notify.click();
  });
  
  this.Then('I see the error message "$errorMsg"', function(error) {
	  
		LoginPage.alertmsg.waitForExist();
		LoginPage.alertmsg.waitForVisible();
		expect(LoginPage.alertmsg.getText()).to.eql(error);
	 
	
  });
};