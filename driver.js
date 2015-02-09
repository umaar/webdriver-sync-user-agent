function init(opts) {
	var wd = require('webdriver-sync');
	var seleniumBinaries = require('selenium-binaries');
	var File = wd.File;

	var DesiredCapabilities = wd.DesiredCapabilities;
	var caps = DesiredCapabilities.chrome();

	var co = new wd.ChromeOptions();
	co.addArguments("--user-agent=" + opts.userAgent);
	caps.setCapability(co.CAPABILITY, co);

	var ChromeDriverService = wd.ChromeDriverService;
	var ChromeDriver = wd.ChromeDriver;
	var service = new ChromeDriverService.Builder()
		.usingAnyFreePort()
		.usingDriverExecutable(new File(seleniumBinaries.chromedriver))
		.build();

	var driver = new ChromeDriver(service, caps);

	return driver;
}

module.exports = {
	init: init
};