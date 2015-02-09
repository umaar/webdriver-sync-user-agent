describe('Browser Settings', function(){

	var userAgent = "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";

	var driver = require('./driver').init({
		userAgent: userAgent
	});

	var assert = require('assert');

	describe('User agent', function(){
		it('should set the user agent', function(){
			driver.get('https://google.com');
			var agent = driver.executeScript("return navigator.userAgent");
			console.log('User agent is: ' + agent);
			assert.equal(agent, userAgent, 'User agent was set correctly');
		});
	});

	after(function() {
		driver.quit();
	});

});