//protractor.conf.js
exports.config = {
    directConnect : true,
    getPageTimeout: 50000,
    allScriptsTimeout: 50000,
    framework: 'custom', 
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'tests/cucumber/Feature/*.feature'
    ],
  
    cucumberOpts: {
      require: 'tests/cucumber/Step_Definition/stepDefinition.js',
      tags: false,
      // format: ['pretty'],
      profile: false,
      'no-source': true
    },
    onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };