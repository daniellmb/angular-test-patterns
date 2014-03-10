module.exports = (config) ->
  config.set
    # frameworks to use
    frameworks: ['jasmine']
    
    # list of files / patterns to load in the browser
    files: [
      # app deps
      '../bower_components/angular/angular.js'
      '../bower_components/angular-route/angular-route.js'
      '../bower_components/angular-mocks/angular-mocks.js'
      '../bower_components/angular-sanitize/angular-sanitize.js'
      # app code
      'app.coffee'
      # mocks
      'mock.coffee'
      # generated specs to run
      'spec.coffee'
    ]
    
    # test results reporter to use
    reporters: ['dots']
    
    # web server port
    port: 9876
    
    # level of logging
    logLevel: config.LOG_DISABLE
    
    # Test in these browsers
    browsers: ['PhantomJS']

    # Continuous Integration mode
    singleRun: true