Unit Test Pattern Utility
=========================

This simple utility written in literate CoffeeScript is used load and run the [pattern rules](../rules). The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this feature, while example code does not have syntax highlighting.

Find Specs
----------

The `findSpecs` function is used search a given list of folders using a file matcher regex. Any matching files are returned in a sorted array. The default folder list is `spec/rules` and the default file matcher looks for files ending in `.spec.coffee.md` (aka literate CoffeeScript).

```CoffeeScript

    specs = require 'jasmine-node/lib/jasmine-node/spec-collection'

    exports.findSpecs = (folders = ['spec/rules'], fileMatcher = /\.spec\.coffee\.md$/i) ->
      #search folders then sort and return
      specs.load folders, fileMatcher
      specs.getSpecs()
```

Find Patterns
-------------

The `findSpecs` function is used search a given list of folders using a file matcher regex. Any matching files are returned in a sorted array. The default folder list is `patterns` and the default file matcher looks for files ending in `.md` (aka markdown).

```CoffeeScript

    exports.findPatterns = (folders = ['patterns'], fileMatcher = /\.md$/i) ->
      #search folders then sort and return
      specs.load folders, fileMatcher
      specs.getSpecs()
```

Load Specs
----------

The `loadSpecs` function is used to download an array of specs from `findSpecs`. An optional callback is called just before each file is 'required'. This is the point where the specs are registered with jasmine.

```CoffeeScript

    require 'coffee-script'

    exports.loadSpecs = (specs, callback) ->
      i = 0
      len = specs.length
      while i < len
        spec = specs[i]
        # ensure that it's downloaded each time
        delete require.cache[spec.path()]
        callback spec if callback
        try
          require spec.path()
        catch e
          console.log "Exception loading: #{spec.path()}\n#{e}"
          throw e
        ++i
```

Load Patterns
-------------

The `loadPatterns` function is used to download an array of specs from `findSpecs`. A callback is called with the file path and the parsed code blocks it contained.

```CoffeeScript

    parse = require './parse.util'

    exports.loadPatterns = (files, callback) ->
      nextFile = ->
        file = files.shift().path()
        blocks = parse.parse file
        callback file, blocks
        nextFile() if files.length
      nextFile()
```

Spec Reporter
-------------

The function `setupReporter` is used to configure the TerminalReporter from jasmine-node used to display the results. As well as setup process listeners for exceptions and the reporter `onComplete` callback (created by the immediately invoked function expression) to set the exit code based on the test results.

```CoffeeScript

    jasmine = require 'jasmine-node'

    setupReporter = ->
      #control the process exit code
      exitCode = 0
      onExit = ->
        process.removeListener 'exit', onExit
        process.exit exitCode
      process.on 'uncaughtException', (e) ->
        console.error e.stack or e
        exitCode = 1
        process.exit exitCode
      process.on 'exit', onExit
      onComplete = (runner) ->
        exitCode = if runner.results().failedCount is 0 then 0 else 1

      #reduce stack trace clutter
      stackTraceFilter = (text) ->
        return text unless text
        lines = []
        text.split(/\n/).forEach (line) ->
          lines.push line if line.indexOf('/jasmine-1.3.1.js') is -1
        lines.join '\n'

      #add jasmine reporter
      jasmine.getEnv().addReporter(
        new jasmine.TerminalReporter
          color: true
          onComplete: onComplete
          stackFilter: stackTraceFilter
      )
```

Run Specs
---------

The `runSpecs` function is used to setup the reporter and execute all the tests.

```CoffeeScript

    exports.runSpecs = ->
      setupReporter()
      jasmine.getEnv().execute()
```