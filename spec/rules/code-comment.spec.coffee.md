Test Pattern Language is Commented
==================================

**RULE:** The first line of the block should be a comment of the language used inside it.

The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this rule, while example code does not have syntax highlighting.

*Examples*
```Example
    ```CoffeeScript
    # CoffeeScript
    ```
    ```JavaScript
    // JavaScript
    ```
```

This rule uses the [isSupported](../lib/rule.util.coffee.md#block-language-is-supported) and [getCode](../lib/rule.util.coffee.md#get-block-code) functions from [rule util](../lib/rule.util.coffee.md).

```CoffeeScript
    
    'use strict'
    util = require('../lib/rule.util')
    getCode = (lang) ->
        util.getCode "code-comment/#{lang}"
```        

A simple method to create the expected comment based on the code language used in the block.

```CoffeeScript

    expectedComment = (lang) ->
        throw new Error("Unknown language: #{lang}") unless util.isSupported(lang)
        switch lang
            when 'CoffeeScript'
                "# #{lang}"
            when 'JavaScript'
                "// #{lang}"
```

Define rule acceptance tests.

```CoffeeScript

    describe 'the first line', ->
        it 'should be a comment with the code language name', ->
            #validate based on language
            block = getCode 'javascript'
            firstLine = block.contents.split('\n')[0]
            expect(firstLine).toBe(expectedComment block.lang)
            
            block = getCode 'coffeescript'
            firstLine = block.contents.split('\n')[0]
            expect(firstLine).toBe(expectedComment block.lang)
```