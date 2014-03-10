module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    jshint: {
      //list of source files to analyze
      all: [
        'Gruntfile.js',
        'javascript/*.js',
        //use to check pattern specs as well
        '../spec/*.js'
      ],
      options: {
        //reuse pattern specs jsHint settings
        jshintrc: '../.jshintrc'
      }
    },
    coffeelint: {
      //list of source files to analyze
      all: 'coffeescript/*.coffee',
      //reuse pattern specs coffeelint settings
      options: require('../spec/config.json').coffeelint
    },
    complexity: {
      js: {
        //list of source files to analyze
        src: ['javascript/*.js'],
        options: {
          // show only maintainability errors
          errorsOnly: false,
          // http://en.wikipedia.org/wiki/Cyclomatic_complexity
          cyclomatic: 8,
          // http://en.wikipedia.org/wiki/Halstead_complexity_measures
          halstead: 9,
          maintainability: 100
        }
      }
    },
    karma: {
      coffee: {
        configFile: 'coffeescript/karma.conf.coffee'
      },
      javascript: {
        configFile: 'javascript/karma.conf.js'
      }
    },
    clean: {
      coverage: '{,*/}/coverage/*'
    },
    coverage: {
      options: {
        thresholds: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        },
        dir: 'coverage',
        root: 'javascript'
      }
    }
  });
  grunt.registerTask('default', [
    'coffeelint',
    'jshint',
    'complexity',
    'clean:coverage',
    'karma',
    'coverage'
  ]);
};