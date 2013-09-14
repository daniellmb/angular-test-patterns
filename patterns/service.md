# Unit Testing AngularJS Services

##### Testing Patterns

* [Suggested Setup](#suggested-service-unit-test-setup-)
* Data type test patterns
  * [Anything](#attach-mything-to-the-scope-)
  * [Array](#attach-myarray-to-the-scope-)
  * [Boolean](#attach-myboolean-to-the-scope-)
  * [Date](#attach-mydate-to-the-scope-)
  * [Method](#attach-mymethod-to-the-scope-)
  * [Null](#attach-mynull-to-the-scope-)
  * [Number](#attach-mynumber-to-the-scope-)
  * [Object](#attach-myobject-to-the-scope-)
  * [RegExp](#attach-myregexp-to-the-scope-)
  * [String](#attach-mystring-to-the-scope-)
  * [Undefined](#expect-myundefined-to-be-undefined-)
* Method use
  * [should return expected value](#mymethod-should-return-expected-value-)
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Service Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'Service: mySvc', ->
  mySvc = null

  beforeEach ->
    # Load the service's module
    module 'myApp'
    
    # Provide any mocks needed
    module ($provide) ->
      #$provide.value 'Name', new MockName()
      # Make sure CoffeeScript doesn't return anything
      null

    # Inject in angular constructs otherwise,
    #  you would need to inject these into each test
    inject (_mySvc_) ->
      mySvc = _mySvc_

  it 'should exist', ->
    expect(!!mySvc).toBe yes

  describe 'the service api', ->
    # Add specs
```

```JavaScript
// JavaScript
describe('Service: mySvc', function () {
  var mySvc;

  beforeEach(function () {
    // Load the service's module
    module('myApp');

    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function (_mySvc_) {
      mySvc = _mySvc_;
    });
  });

  it('should exist', function () {
    expect(!!mySvc).toBe(true);
  });

  describe('the service api', function () {
    // Add specs
  });
});
```

####My service should:

#####provide a `myThing` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should define a myThing property', ->
  expect(mySvc.myThing).toBeDefined()
```

```JavaScript
// JavaScript
it('should define a myThing property', function () {
  expect(mySvc.myThing).toBeDefined();
});
```

#####provide a `myArray` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myArray property', ->
  expect(mySvc.myArray instanceof Array).toBe true
```

```JavaScript
// JavaScript
it('should provide a myArray property', function () {
  expect(mySvc.myArray instanceof Array).toBe(true);
});
```

#####provide a `myBoolean` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a boolean myBoolean property', ->
  expect(typeof mySvc.myBoolean).toBe 'boolean'
```

```JavaScript
// JavaScript
it('should provide a boolean myBoolean property', function () {
  expect(typeof mySvc.myBoolean).toBe('boolean');
});
```

#####provide a `myDate` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myDate property', ->
  expect(mySvc.myDate instanceof Date).toBe true
```

```JavaScript
// JavaScript
it('should provide a myDate property', function () {
  expect(mySvc.myDate instanceof Date).toBe(true);
});
```

#####provide a `myMethod` function [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myMethod function', ->
  expect(typeof mySvc.myMethod).toBe 'function'
```

```JavaScript
// JavaScript
it('should provide a myMethod function', function () {
  expect(typeof mySvc.myMethod).toBe('function');
});
```

#####provide a `myNull` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myNull property', ->
  expect(mySvc.myNull).toBe null
```

```JavaScript
// JavaScript
it('should provide a myNull property', function () {
  expect(mySvc.myNull).toBe(null);
});
```

#####provide a `myNumber` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myNumber property', ->
  expect(typeof mySvc.myNumber).toBe 'number'
```

```JavaScript
// JavaScript
it('should provide a myNumber property', function () {
  expect(typeof mySvc.myNumber).toBe('number');
});
```

#####provide a `myObject` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myObject property', ->
  expect(mySvc.myObject instanceof Object).toBe true
```

```JavaScript
// JavaScript
it('should provide a myObject property', function () {
  expect(mySvc.myObject instanceof Object).toBe(true);
});
```

#####provide a `myRegExp` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myRegExp property', ->
  expect(mySvc.myRegExp instanceof RegExp).toBe true
```

```JavaScript
// JavaScript
it('should provide a myRegExp property', function () {
  expect(mySvc.myRegExp instanceof RegExp).toBe(true);
});
```

#####provide a `myString` property [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should provide a myString property', ->
  expect(typeof mySvc.myString).toBe 'string'
```

```JavaScript
// JavaScript
it('should provide a myString property', function () {
  expect(typeof mySvc.myString).toBe('string');
});
```

#####expect `myUndefined` to be undefined [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should expect myUndefined to be undefined', ->
  expect(mySvc.myUndefined).not.toBeDefined()
```

```JavaScript
// JavaScript
it('should expect myUndefined to be undefined', function () {
  expect(mySvc.myUndefined).not.toBeDefined();
});
```

#####`myMethod` should return expected value [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'myMethod should return expected value', ->
  result = mySvc.myMethod()
  expect(result).toBe('Not implemented')
```

```JavaScript
// JavaScript
it('myMethod should return expected value', function () {
  var result = mySvc.myMethod();
  expect(result).toBe('Not implemented');
});
```


