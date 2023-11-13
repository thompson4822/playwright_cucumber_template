const reporter = require('cucumber-html-reporter');
var date = new Date();
var currentDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() 
    + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();

var options = {
    brandTitle: 'Cucumber Report',
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report_' + currentDate + '.html',
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.1.1",
        "Test Environment": "QA",
        "Platform": "Web/Svelte",
        "Sprint": "001"
    }
}

reporter.generate(options);