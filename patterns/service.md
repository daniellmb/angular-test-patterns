# Unit Testing AngularJS Services

##### Testing Patterns

* [Suggested Setup](#suggested-service-unit-test-setup-)
* Data type test patterns
  * [Anything](#provide-a-mything-property-)
  * [Array](#provide-a-myarray-property-)
  * [Boolean](#provide-a-myboolean-property-)
  * [Date](#provide-a-mydate-property-)
  * [Method](#provide-a-mymethod-function-)
  * [Null](#provide-a-mynull-property-)
  * [Number](#provide-a-mynumber-property-)
  * [Object](#provide-a-myobject-property-)
  * [RegExp](#provide-a-myregexp-property-)
  * [String](#provide-a-mystring-property-)
  * [Undefined](#expect-a-myundefined-to-be-undefined-)
* Method use
  * [should return expected value](#mymethod-should-return-expected-value-)
  
* Mock $http calls  
  * [should make $http call and return value](#getData-should-make-$http-call-and-return-value-)
  
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Service Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'Service: mySvc', ->
  mySvc = null
  httpBackend = null
  mockData = null
    
  # Use to provide any mocks needed
  _provide = (callback) ->
    # Execute callback with $provide
    module ($provide) ->
      callback $provide
      # Make sure CoffeeScript doesn't return anything
      null

  # Use to inject the code under test
  _inject = ->
    inject (_mySvc_, $httpBackend, _mockData_) ->
      mySvc = _mySvc_
      httpBackend = $httpBackend
      mockData = _mockData_

  # make sure no expectations were missed in your tests.
  # (e.g. expectGET or expectPOST)
  afterEach ->
    httpBackend.verifyNoOutstandingExpectation()
    httpBackend.verifyNoOutstandingRequest()

  # Call this before each test, except where you are testing for errors
  _setup = ->
    # Mock any expected data
    _provide (provide) ->
      provide.value 'myVal', {}
    
    # Inject the code under test
    _inject()

  beforeEach ->
    # Load the service's module
    module 'myApp','myApp.mockData'

  describe 'the service api', ->
    beforeEach ->
      # Inject with all expected values
      _setup()

    it 'should exist', ->
      expect(!!mySvc).toBe true
  
    # Add specs

  describe 'service errors', ->
    it 'should throw an error when required dependency is missing', ->
      # Use an anonymous function to wrap the code that will fail
      wrapper = ->
        # Inject WITHOUT providing required values
        _inject()
      expect(wrapper).toThrow 'mySvc: myVal not provided'
      ###
      Note: you can use Function.bind to avoid an anonymous function wrapper for inject,
      however, you'll need a polyfill for PhantomJS such as: http://goo.gl/XSLOdx
      svc = (mySvc) ->
      expect(inject.bind(null, svc)).toThrow 'mySvc: myVal not provided'
      ###
```

```JavaScript
// JavaScript
describe('Service: mySvc', function () {
  var mySvc, httpBackend, mockData;

  // Use to provide any mocks needed
  function _provide(callback) {
    // Execute callback with $provide
    module(function ($provide) {
      callback($provide);
    });
  }

  // Use to inject the code under test
  function _inject() {
    inject(function (_mySvc_, $httpBackend, _mockData_) {
      mySvc = _mySvc_;
      httpBackend = $httpBackend;
      mockData = _mockData_;
    });
  }

  // Call this before each test, except where you are testing for errors
  function _setup() {
    // Mock any expected data
    _provide(function (provide) {
      provide.value('myVal', {});
    });

    // Inject the code under test
    _inject();
  }

  beforeEach(function () {
    // Load the service's module
    module('myApp', 'myApp.mockData');
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('the service api', function () {
    beforeEach(function () {
      // Inject with expected values
      _setup();
    });

    it('should exist', function () {
      expect(!!mySvc).toBe(true);
    });

    // Add specs
  });

  describe('service errors', function () {
    it('should throw an error when required dependency is missing', function () {
      // Use an anonymous function to wrap the code that will fail
      function wrapper() {
        // Inject WITHOUT providing required values
        _inject();
      }
      expect(wrapper).toThrow('mySvc: myVal not provided');

      /*
      Note: you can use Function.bind to avoid an anonymous function wrapper for inject,
      however, you'll need a polyfill for PhantomJS such as: http://goo.gl/XSLOdx
      var svc = function (mySvc) {};
      expect(inject.bind(null, svc)).toThrow('mySvc: myVal not provided');
      */
    });
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
````

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

#####`getData` should make $http call and return value [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'getData should return make $http call', ->
  data = null

  #given
  httpBackend.whenGET 'http://www.mocky.io/v2/553e0de62f711b7b1aa5d24f'
  .respond(mockData)

  #when
  mySvc.getData()
  .then (response) ->
    data = response.data
  
  httpBackend.flush()

  #then
  expect(data.map( (elm) ->
    elm.first_name
  )).toEqual mockData.data.map( (elm) ->
    elm.first_name
  )


```

```JavaScript
// JavaScript
it('getData should make $http call', function () {
  var data;

  //given
  httpBackend.whenGET('http://www.mocky.io/v2/553e0de62f711b7b1aa5d24f').respond(mockData);

  //when
  mySvc.getData().then(function (response) {
    data = response.data;
  });

  httpBackend.flush();

  //then
  expect(data.map(function (elm) {return elm.first_name; })).toEqual(mockData.data.map(function (elm) {return elm.first_name; }));
});
```


