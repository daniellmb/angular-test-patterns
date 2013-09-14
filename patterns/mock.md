## Unit Testing AngularJS using Mocks

Because AngularJS removes hard-coded dependencies via injection it's possible to change them at run-time and replace them with mocks. Mocks are a great way to isolate the code under test from code it integrates with.

### How to use mocks

Using mocks in AngularJS is as easy as `providing` them. **Note**: This must be done *before* the code under test is injected.

####Examples
```CoffeeScript
# CoffeeScript
beforeEach ->
  # Provide any mocks needed before each test
  module ($provide) ->
    $provide.value 'Name', new MockName()
    # Make sure CoffeeScript doesn't return anything
    return null
    
  # ...
```

```JavaScript
// JavaScript
beforeEach(function () {
  // Provide any mocks needed before each test
  module(function ($provide) {
    $provide.value('Name', new MockName());
  });
  
  // ...
});
```


###### [Example](../example) mock implementations

Mocks allow you to unit test you are interacting with a dependency correctly. They enable you to control the context and answer questions such as:

### Is my code:

* calling a dependency method when it should
* passing the correct value(s) to that method
* handling dependency errors
* cleaning up properly afterword