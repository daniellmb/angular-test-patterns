Test Pattern Language is Supported
==================================

**RULE:** The language of the code inside the test pattern block should be supported. The language of the testing pattern is defined by the fenced code block.

The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this rule, while example code does not have syntax highlighting.

*Examples*
```Example
    ```CoffeeScript
    ```
    ```JavaScript
    ```
```

This rule uses the [isSupported](../lib/rule.util.coffee.md#block-language-is-supported) and [getCode](../lib/rule.util.coffee.md#get-block-code) functions from [rule util](../lib/rule.util.coffee.md).

```CoffeeScript

    'use strict'
    util = require('../lib/rule.util')
    getCode = (lang) ->
        util.getCode "code-comment/#{lang}"
```

Define rule acceptance tests.

```CoffeeScript

    describe 'the code block', ->
        it 'should be a supported code language', ->
            #validate based on language
            block = getCode 'javascript'
            expect(util.isSupported block.lang).toBe yes
            
            block = getCode 'coffeescript'
            expect(util.isSupported block.lang).toBe yes
```