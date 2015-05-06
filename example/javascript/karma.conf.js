module.exports = function (config) {
  config.set({
    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // app deps
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      //mock data
      '../../spec/mockData.js',
      // app code
      'app.js',
      // mocks
      'mock.js',
      // generated specs to run
      'spec.js'
    ],

    // test results reporter to use
    reporters: ['dots', 'coverage'],

    // configure which files should be tested for coverage
    preprocessors: {
      '*.js': 'coverage'
    },

    // configure coverage reporter
    coverageReporter: {
      // change to html if you need details
      //type: 'html',
      type: 'text-summary',
      dir: 'coverage'
    },

    // web server port
    port: 9877,

    // level of logging
    logLevel: config.LOG_DISABLE,

    // Test in these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    singleRun: true
  });
};