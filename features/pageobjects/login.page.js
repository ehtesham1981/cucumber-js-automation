// login.page.js
"use strict";
var Page = require('./page')
class LoginPage extends Page {
    get username()  { return browser.element('#login-form > fieldset > section:nth-child(1) > label.input > input[type="text"]'); }
    get passwordf() { return browser.element('#login-form > fieldset > section:nth-child(2) > label.input > input[type="password"]'); }
	get logbutton() {return browser.element('#login-form > footer > button');}
	get notify()    {return browser.element('#activity > i');}
	get dashboard() {return browser.element('#content > div > div.col-xs-12.col-sm-7.col-md-7.col-lg-4.big-breadcrumbs > h1');}
	get alertmsg() {return browser.element('//*[@id="login-form"]/fieldset/section[1]/div[2]/strong');}
    //get form()      { return browser.element('#login'); }
    //get flash()     { return browser.element('#flash'); }
    
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
	
}
module.exports = new LoginPage();