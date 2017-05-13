# visp-automation
UI Automation suite for UBO web 8.0

## Includes

* WebdriverIO
* CucumberJS
* Selenium Standalone server
* Chai


Check package.json for version

## Initialization

* Install Java 
* Install NodeJS
* Install Git

Java is required to run Selenium Standalone

For Microsoft Windows:

```npm install --global --production windows-build-tools```

## Running the suite

``` wdio wdio.conf.js ```

Ensure Selenium Standalone is already runnnig

``` java -Dwebdriver.chrome.driver=c:/chromedriver.exe -jar selenium-server-standalone-3.3.1.jar ```

## Folder structure

```
..features/
	steps/
	support/
	pageobjects/

```


## Installation

Java should be installed on machine

* Install nodejs  (preferred v6.10.2 LTS)

* At ‘features’ folder level, Install webdriverio locally 

	```npm install webdriverio --save-dev```
	
	Verify that you can see ‘wdio’ file under node_modules
	
* Install Cucumber 

	```npm install cucumber --save-dev ```
	
* Download Selenium-standalone server 

* Download desired browsers driver e.g. chromedriver.exe (for Windows)

* Install wdio-cucumber framework

	```npm install wdio-cucumber-framework --save-dev```
	
* Set up Chai as assertion library 

	```npm install chai --save-dev```





