Test Pattern Code is Valid
==========================

**RULE:** The code inside the test pattern block should be valid. While the examples below are valid code, they will not pass [lint validation](lint-free.spec.coffee.md).

The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this rule, while example code does not have syntax highlighting.

*Examples*
```Example
    ```CoffeeScript
    x = () -> return 1234 + 4567
    ```
    ```JavaScript
    var x = function () { return 1234 + 4567 }
    ```
```

This rule uses the [isCodeValid](../lib/rule.util.coffee.md#block-code-is-valid) and [getCode](../lib/rule.util.coffee.md#get-block-code) functions from [rule util](../lib/rule.util.coffee.md).

```CoffeeScript

    'use strict'
    util = require('../lib/rule.util')
    getCode = (lang) ->
        util.getCode "code-comment/#{lang}"
```

Define rule acceptance tests.

```CoffeeScript

    describe 'the code block', ->
        it 'should contain valid code', ->
            #validate based on language
            block = getCode 'javascript'
            expect(util.isCodeValid(block)).toBe yes

            block = getCode 'coffeescript'
            expect(util.isCodeValid(block)).toBe yes
```