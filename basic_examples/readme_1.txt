#Installation Steps:
1. install node/npm from .msi file | https://nodejs.org/en/download/
 verify node/npm version
 node -v		8.11.3	
 npm -v	 		6.1.0
 
2. install selenium webdriver
3. npm install -g protractor    |  install protractor
protractor --version		5.3.2

4. webdriver-manager update    
webdriver-manager update --ignore_ssl   | if error comes in above stmt

Note: Imp: Restart system if above setup does not work
Webdriver Manager listen to any tests which run via protractor.



#How to Run:
1. webdriver-manager start			|  		http://localhost:4444/wd/hub/static/resource/hub.html
2. protractor conf1.js

 
#Errors:
whttps://stackoverflow.com/questions/9626990/receiving-error-error-ssl-error-self-signed-cert-in-chain-while-using-npm
https://github.com/angular/webdriver-manager/issues/239



#Index
1. Config and Spec file
Configuration file: This file constains info related to test case files i.e. specs.js and to talk with Selenium server (Selenium Address). 
Chrome is the default browser for Protractor.
Spec file: Spec file contains the logic and locators to interact with the web application.