## Complexity Threshold Enforcement for AngularJS

### JavaScript

#### Install Dependencies

* Install [grunt-complexity](https://github.com/vigetlabs/grunt-complexity) by running `npm install grunt-complexity --save-dev`

Then add a few lines to your grunt file to configure it ([full example](../example/Gruntfile.js)).

####Example
```JavaScript
// JavaScript
grunt.initConfig({
  // ...
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
        halstead: 8,
        maintainability: 100
      }
    }
  }
  // ...
});
```


![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/example.png)
![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/complexity.png)

### CoffeeScript

Unfortunately grunt-complexity [doesn't support CoffeeScript yet](https://github.com/vigetlabs/grunt-complexity/issues/14), but it's only a pull request away if you have the time to implement it *hint hint* :) In the meantime you can use *grunt-coffeelint* as it has [basic complexity checking](https://github.com/clutchski/coffeelint/blob/master/test/test_cyclomatic_complexity.coffee) and threshold enforcement.

First install [grunt-coffeelint](https://github.com/vojtajina/grunt-coffeelint) by running `npm install grunt-coffeelint --save-dev`, then add a few lines to your grunt file to configure it ([full example](../example/Gruntfile.js)).

####Example
```JavaScript
// JavaScript
grunt.initConfig({
  // ...
  coffeelint: {
    //list of source files to analyze
    all: ['coffeescript/*.coffee'],
    options: {
      cyclomatic_complexity: {
        // http://en.wikipedia.org/wiki/Cyclomatic_complexity
        value: 8,
        level: 'error'
      }
    }
  },
  // ...
});
```


