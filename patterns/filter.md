## Unit Testing AngularJS Filters

##### Testing Patterns

* [Suggested Setup](#suggested-filter-unit-test-setup-)
* When evaluating an expression
  * [it should return the expected output](#return-the-expected-output-)
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Filter Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'Service: myFltr', ->
  myFltr = null

  beforeEach ->
    # Load the filters's module
    module 'myApp'
    
    # Provide any mocks needed
    module ($provide) ->
      #$provide.value 'Name', new MockName()
      # Make sure CoffeeScript doesn't return anything
      null

    # Inject in angular constructs otherwise,
    #  you would need to inject these into each test
    inject ($filter) ->
      myFltr = $filter('myFltr')

  it 'should exist', ->
    expect(!!myFltr).toBe yes

  describe 'when evaluating an expression', ->
    # Add specs
```

```JavaScript
// JavaScript
describe('Filter: myFltr', function () {
  var myFltr;

  beforeEach(function () {
    // Load the filters's module
    module('myApp');

    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($filter) {
      myFltr = $filter('myFltr');
    });
  });

  it('should exist', function () {
    expect(!!myFltr).toBe(true);
  });

  describe('when evaluating an expression', function () {
    // Add specs
  });
});
```

#### My filter should:

#####return the expected output [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should return the expected output', ->
  text = 'AngularJS'
  expect(myFltr(text)).toBe "my filter: #{text}"
```

```JavaScript
// JavaScript
it('should return the expected output', function () {
  var text = 'AngularJS';
  expect(myFltr(text)).toBe('my filter: ' + text);
});
```


