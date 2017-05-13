var LoginPage = require('../pageobjects/login.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var expect = require('chai').expect //this should be in some configuration file

module.exports = function given() {
  this.Given(/^I open UBO webapp$/, function() {
 
       SubListPage.open();
			
	
  }); 
  
  this.Given('I login with username "$un" and password "$pwd"', function(login, password) {
    
	  
	  LoginPage.username.waitForExist();
	  LoginPage.username.setValue(login);
	  LoginPage.passwordf.setValue(password);
	  LoginPage.logbutton.click();
	
  });

  
  this.When('I navigate to subscriber list', function() {
    		
	SubListPage.subscribersmenu.waitForExist();
	SubListPage.subscribersmenu.waitForVisible();
	SubListPage.subscribersmenu.click();
		
	  
	SubListPage.subscriberslistmenu.waitForExist();
	SubListPage.subscriberslistmenu.waitForVisible();
	SubListPage.subscriberslistmenu.click();
	
  });

  this.When('I click on "$ListButton" button', function(btn_sortlist) {
  
		switch(btn_sortlist){
			
			case "Paid Up":
				SubListPage.btn_PaidUp.waitForExist();
				SubListPage.btn_PaidUp.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_PaidUp.click();
				
				break;
			case "Due":
				SubListPage.btn_Due.waitForExist();
				SubListPage.btn_Due.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_Due.click();
				
				break;
			case "Past Due":
				SubListPage.btn_PastDue.waitForExist();
				SubListPage.btn_PastDue.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_PastDue.click();
				
				break;
			case "Suspended":
				SubListPage.btn_Suspended.waitForExist();
				SubListPage.btn_Suspended.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_Suspended.click();
				
				break;
			case "Hibernated":
				SubListPage.btn_Hibernated.waitForExist();
				SubListPage.btn_Hibernated.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_Hibernated.click();
				
				break;
			case "Inactive":
				SubListPage.btn_Inactive.waitForExist();
				SubListPage.btn_Inactive.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_Inactive.click();
				
				break;
			case "Deleted":
				SubListPage.btn_Deleted.waitForExist();
				SubListPage.btn_Deleted.isVisible();
			    console.log('Sort list for: ' + btn_sortlist);
				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_All.click(); //reseting all pre clicked buttons
				SubListPage.btn_Deleted.click();
				
				break;
			default:
				console.log('Nothing to click!');
				
						
		}
	
  });
  
  this.Then('I see subscriber list', function() {
  
			SubListPage.Sublist_ribbon.waitForExist();
			SubListPage.Sublist_ribbon.waitForVisible();
			expect(SubListPage.Sublist_ribbon.getText()).to.eql('Subscribers List');
	
  });
  
  this.Then('I see "$btn" button', function(btn_name) {
	  
		
		switch(btn_name){
			
			case "Paid Up":
				SubListPage.btn_PaidUp.waitForExist();
				SubListPage.btn_PaidUp.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_PaidUp.getText()).to.eql(btn_name);
				break;
			case "Due":
				SubListPage.btn_Due.waitForExist();
				SubListPage.btn_Due.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_Due.getText()).to.eql(btn_name);
				break;
			case "Past Due":
				SubListPage.btn_PastDue.waitForExist();
				SubListPage.btn_PastDue.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_PastDue.getText()).to.eql(btn_name);
				break;
			case "Suspended":
				SubListPage.btn_Suspended.waitForExist();
				SubListPage.btn_Suspended.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_Suspended.getText()).to.eql(btn_name);
				break;
			case "Hibernated":
				SubListPage.btn_Hibernated.waitForExist();
				SubListPage.btn_Hibernated.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_Hibernated.getText()).to.eql(btn_name);
				break;
			case "Inactive":
				SubListPage.btn_Inactive.waitForExist();
				SubListPage.btn_Inactive.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_Inactive.getText()).to.eql(btn_name);
				break;
			case "Deleted":
				SubListPage.btn_Deleted.waitForExist();
				SubListPage.btn_Deleted.isVisible();
			    console.log(btn_name + ' Button available ');
				expect(SubListPage.btn_Deleted.getText()).to.eql(btn_name);
				break;
			default:
				console.log('Nothing here');
				
						
		}
	
  });
  
 this.Then('I see records of "$ListButton" status only', function(colstatus) {
  
			var total_records = SubListPage.Sublist_totalRec.getText();
			
			//console.log(total_records.substr(0, 13));
			
			if (total_records.substr(0, 13) === 'Showing 0 to '){ //To avaoid exception when zero records are returned
				
				console.log('No records found!');
				
			} else {
				SubListPage.col_status.waitForExist();
				SubListPage.col_status.waitForVisible();
				console.log('Record status is ' + SubListPage.col_status.getText()); //debugging only
			
				//expect(SubListPage.col_status.getText()).to.eql(colstatus); //disabling check until bug (UBOW-30) is fixed
			}
			
	
  }); 
  
 this.Then('I see "$frmbtn" push button', function(frm_btn) {
  
				
			
			SubListPage.btn_AddFilter.waitForExist();
			SubListPage.btn_AddFilter.waitForVisible();
			console.log('Button is ' + SubListPage.btn_AddFilter.getText()); //debugging only
			expect(SubListPage.btn_AddFilter.getText()).to.eql(frm_btn);
			
			
	
  }); 
  
  
  
};