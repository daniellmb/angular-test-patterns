Test Pattern Code is Lint-Free
==============================

**RULE:** The code inside the test pattern block should be pass lint validation. This helps ensure clear and consistent use of the testing patterns.

The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this rule, while example code does not have syntax highlighting.

*Examples*
```Example
    ```CoffeeScript
    x = ->
      return 1234 + 4567
    ```
    ```JavaScript
    var x = function () {
      return 1234 + 4567;
    };
    ```
```

This rule uses the [isCodeLintFree](../lib/rule.util.coffee.md#block-code-lint-free) and [getCode](../lib/rule.util.coffee.md#get-block-code) functions from [rule util](../lib/rule.util.coffee.md).

```CoffeeScript

    'use strict'
    util = require('../lib/rule.util')
    getCode = (lang) ->
        util.getCode "lint-free/#{lang}"
```

Define rule acceptance tests.

```CoffeeScript

    describe 'the code block', ->
        it 'should contain lint-free code', ->
            #validate based on language
            block = getCode 'javascript'
            expect(util.isCodeLintFree(block)).toBe yes

            block = getCode 'coffeescript'
            expect(util.isCodeLintFree(block)).toBe yes
```