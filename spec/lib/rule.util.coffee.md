Test Pattern Rule Utility
=========================

This simple utility written in literate CoffeeScript is used validate that the [test pattern code blocks](parse.util.coffee.md#anatomy-of-a-test-pattern-code-block) are properly following the conventions defined in the [pattern rules](../rules). The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this feature, while example code does not have syntax highlighting.

Get Block Code
--------------

The `getCode` function is used to load the test [fixtures](../fixtures) when unit testing the [pattern rules](../rules) or the current code block when unit testing [pattern code blocks](../../patterns).

```CoffeeScript

    parse = require './parse.util'
    jasmine = require 'jasmine-node'

    getFixture = (path) ->
      parse.parse("./spec/fixtures/#{path}.txt")[0] #return the first block

    exports.getCode = (path) ->
      block = jasmine.getEnv().currentSpec.codeBlock
      if block then block else getFixture path
```

Block Language is Supported
---------------------------

The `isSupported` function validates that a given string is in the list of [supported code languages](../config.json#L2). Note that the test *is* case-sensitive.

```CoffeeScript
    
    config = require '../config.json'

    exports.isSupported = isSupported = (lang) ->
      config.languages.indexOf(lang) isnt -1
```

Block Code is Valid
-------------------

The `isCodeValid` function uses language specific validation to verify the code syntax is valid. 

```CoffeeScript

    coffeescript = require 'coffee-script'
    esprima = require 'esprima'

    isValid =
      CoffeeScript: (code) ->
        coffeescript.compile code
      JavaScript: (code) ->
        esprima.parse code,
          tolerant: yes

    exports.isCodeValid = (block) ->
      throw new Error("Unknown language: #{block.lang}") unless isSupported block.lang
      try
        isValid[block.lang] block.contents
        return yes
      catch e
        console.log "#{block.lang} Error: #{e}"
        return no
```

Block Code Lint-Free
--------------------

The `isCodeLintFree` function uses language specific validation to verify the code is following general best practices as well as our conventions specified for [CoffeeScript](../config.json) and [JavaScript](../../.jshintrc). 

```CoffeeScript

    coffeelint = require 'coffeelint'
    jshint = require('jshint').JSHINT

    coffeeLintOpts = config.coffeelint
    jsHintOpts = JSON.parse parse.getFile('.jshintrc')

    isLintFree =
      CoffeeScript: (code) ->
        coffeelint.lint code, coffeeLintOpts
      JavaScript: (code) ->
        jshint code, jsHintOpts
        jshint.errors

    exports.isCodeLintFree = (block) ->
      throw new Error('Unknown language: ' + block.lang) unless isSupported(block.lang)
      errors = isLintFree[block.lang] block.contents
      errors.forEach (e) ->
        console.log [
          block.title, ' ', 
          block.desc, ' (', 
          block.lang, ')\nline ', 
          e.lineNumber or e.line, ': ',
          e.message or e.reason
        ].join('')
      errors.length is 0
```