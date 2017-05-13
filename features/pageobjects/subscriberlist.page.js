// subscriberlist.page.js
"use strict";
var Page = require('./page')
class SubscriberListPage extends Page {
    get subscribersmenu()  { return browser.element('#left-panel > nav > ul > li:nth-child(2) > a > span > span'); }
    get subscriberslistmenu() { return browser.element('#left-panel > nav > ul > li.open > ul > li > a > span > span'); }
	get Sublist_ribbon()    {return browser.element('#ribbon > ol > li:nth-child(2)');}
	get btn_All()    {return browser.element('//*[@id="tbl-subscribers_wrapper"]/div[1]/div[1]/div/a[1]');}
	get btn_PaidUp()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(2) > span');}
	get btn_Due()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(3) > span');}
	get btn_PastDue()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(4)');}
	get btn_Suspended()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(5) > span');}
	get btn_Hibernated()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(6) > span');}
	get btn_Inactive()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(7) > span');}
	get btn_Deleted()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a.btn.btn-default.btn-filter-deleted.active > span');}
	get col_status()    {return browser.element('//*[@id="tbl-subscribers"]/tbody/tr[1]/td[2]');}
	get Sublist_totalRec() {return browser.element('#tbl-subscribers_info');}
	get btn_AddFilter() {return browser.element('//*[@id="subscribers-list--jarviswidget-1"]/header/div[3]/button[2]');}
    
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new SubscriberListPage();