# Unit Testing AngularJS Constants

##### Testing Patterns

* [Suggested Setup](#suggested-constant-unit-test-setup-)
* Patterns
  * [be my expected value](#be-my-expected-value-)
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Constant Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'Constant: myConst', ->
  myConst = null

  beforeEach ->
    # Load the constant's module
    module 'myApp'

    # Inject in angular constructs otherwise,
    #  you would need to inject these into each test
    inject (_myConst_) ->
      myConst = _myConst_

  it 'should exist', ->
    expect(!!myConst).toBe yes

  describe 'the constant', ->
    # Add specs
```

```JavaScript
// JavaScript
describe('Constant: myConst', function () {
  var myConst;

  beforeEach(function () {
    // Load the constant's module
    module('myApp');

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function (_myConst_) {
      myConst = _myConst_;
    });
  });

  it('should exist', function () {
    expect(!!myConst).toBe(true);
  });

  describe('the constant', function () {
    // Add specs
  });
});
```

####My constant should:

#####be my expected value [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should be my expected value', ->
  expect(myConst).toBe(42)
```

```JavaScript
// JavaScript
it('should return my expected value', function () {
  expect(myConst).toBe(42);
});
```



