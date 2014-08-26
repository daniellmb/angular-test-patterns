## Coverage Threshold Enforcement for AngularJS

If you want more than just insight into code coverage, but a way to enforce threshold limits as well, this page is for you.

### JavaScript

#### Install Dependencies

* Install [grunt-istanbul-coverage](https://github.com/daniellmb/grunt-istanbul-coverage) by running `npm install grunt-istanbul-coverage --save-dev`
* Install [karma-coverage](https://github.com/karma-runner/karma-coverage) by running `npm install karma-coverage --save-dev`

First configure karma to create coverage files ([full example](../example/javascript/karma.conf.js)).

####Configure Karma Coverage Example
```JavaScript
// JavaScript
config.set({
  // ...
  // test results reporters to use
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
  }
  // ...
});
```


Next add a few lines to your grunt file to configure your thresholds ([full example](../example/Gruntfile.js)).

####Configure Coverage Thresholds Example
```JavaScript
// JavaScript
grunt.initConfig({
  // ...
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
  // ...
});
```


TIP: Use [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to clean the coverage folder each time to speed up the checks and so you're only validating the most recent coverage levels generated from karma ([full example](../example/Gruntfile.js)).

####Configure Grunt Clean Example
```JavaScript
// JavaScript
grunt.initConfig({
  // ...
  clean: {
    coverage: 'coverage/*'
  }
  // ...
});
```


#### Order matters!

1. First `clean` the coverage folder to remove any previous coverage files.
2. Then run `karma` to execute your unit tests and generate a new coverage file.
3. Run the `coverage` task to analyze and enforce your threshold limits.

####Task Order Example
```JavaScript
// JavaScript
grunt.registerTask('test', [
  'clean:coverage',
  'karma',
  'coverage'
]);
```


####CoffeeScript

pattern(coverage): update for CoffeeScript

karma-coverage now fully supports CoffeeScript.

```JavaScript
// JavaScript
config.set({
  files: [
    'src/**/*.coffee',
    'test/**/*.coffee'
  ],
  // coverage reporter generates the coverage
  reporters: ['progress', 'coverage'],
  preprocessors: {
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul via Ibrik unless
    // specified otherwise in coverageReporter.instrumenter)
    'src/*.coffee': ['coverage'],
    // note: project files will already be converted to
    // JavaScript via coverage preprocessor.
    // Thus, you'll have to limit the CoffeeScript preprocessor
    // to uncovered files.
    'test/**/*.coffee': ['coffee']
  },
  // configure coverage reporter
  coverageReporter: {
    // change to html if you need details
    //type: 'html',
    type: 'text-summary',
    dir: 'coverage/'
  }
});
 ```


