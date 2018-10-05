var wd = require('selenium-webdriver');
var assert = require('assert');

var SELENIUM_HOST = 'http://localhost:4444/wd/hub';

var browser = new wd.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();
browser.get('https://spb.hh.ru/resume/354860edff029309ae0039ed1f4c7a54364c52');
