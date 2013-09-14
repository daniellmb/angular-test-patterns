## Unit Testing AngularJS Directives

##### Testing Patterns

* [Suggested Setup](#suggested-directive-unit-test-setup-)
* When created
  * [should render the expected output](#render-the-expected-output-)
* When the model changes
  * *[pull request welcome!](../#contributing-test-patterns)*
* when destroyed
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Directive Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'Directive: myDir', ->
  element = scope = compile = defaultData = null
  validTemplate = '<my-dir ng-model="data"></my-dir>'

  createDirective = (data, template) ->
    # Setup scope state
    scope.data = data or defaultData

    # Create directive
    elm = compile(template or validTemplate) scope

    # Trigger watchers
    #scope.$apply()
    
    # Return
    elm

  beforeEach ->
    # Load the directive's module
    module 'myApp'

    # Reset data each time
    defaultData = 42

    # Provide any mocks needed
    module ($provide) ->
      #$provide.value 'Name', new MockName()
      # Make sure CoffeeScript doesn't return anything
      null

    # Inject in angular constructs otherwise,
    #  you would need to inject these into each test
    inject ($rootScope, $compile) ->
      scope = $rootScope.$new()
      compile = $compile
    
  describe 'when created', ->
    # Add specs

  describe 'when the model changes', ->
    # Add specs

  describe 'when destroyed', ->
    # Add specs
```

```JavaScript
// JavaScript
describe('Directive: myDir', function () {
  var element, scope, compile, defaultData,
      validTemplate = '<my-dir ng-model="data"></my-dir>';

  function createDirective(data, template) {
    var elm;
    
    // Setup scope state
    scope.data = data || defaultData;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('myApp');
    
    // Reset data each time
    defaultData = 42;
    
    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });
    
    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function () {
    // Add specs
  });

  describe('when the model changes', function () {
    // Add specs
  });

  return describe('when destroyed', function () {
    // Add specs
  });
});
```

#### My directive should:

#####render the expected output [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
it 'should render the expected output', ->
  element = createDirective()
  expect(element.text()).toBe 'this is my directive'
```

```JavaScript
// JavaScript
it('should render the expected output', function () {
  element = createDirective();
  return expect(element.text()).toBe('this is my directive');
});
```


