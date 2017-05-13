"use strict";
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
				
		browser.windowHandleSize({width:1024,height:768});
		browser.url('/' + path);
	}
	
	
}
module.exports = Page; //exporting instnace of the class as best practice instead of creating in test so that page objects remains stateless