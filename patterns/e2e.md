## End-to-End Testing AngularJS

##### End-to-End Testing Frameworks

* [Angular Scenario](#angular-scenario-)
* [Protractor](#protractor-)

### Angular Scenario [&#8593;](#end-to-end-testing-frameworks)

Angular Scenario is a simple browser based end to end test runner.

#### Install Dependencies

* Install [angular-scenario](https://github.com/angular/bower-angular-scenario) by running `bower install angular-scenario --save-dev`

#### Configure Scenario Runner

There isn't really anything to configure you only need to create a file that includes the runner and the scenarios you want to run ([example file](../example/javascript/e2e.html)).

#### Testing Patterns

* [Suggested Setup](#suggested-scenario-unit-test-setup-)
* Routes
  * [have a default route configured](#have-a-default-route-configured-)
* Contents
  * [should contain expected text](#should-contain-expected-text-)
  * [should contain my directive tag](#should-contain-my-directive-tag-)
  * [should contain my directive attribute](#should-contain-my-directive-attribute-)
  * [should contain my directive class name](#should-contain-my-directive-class-name-)
* Interactions
  * *[pull request welcome!](../#contributing-test-patterns)*
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

####Suggested Scenario Unit Test Setup [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'My App', ->
  # Add specs
```

```JavaScript
// JavaScript
describe('My App', function () {
  // Add specs
});
```

#### My app should:

#####have a `default route` configured [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'default route', ->
  it 'should automatically redirect to / when location hash/fragment is empty', ->
    browser().navigateTo 'index.html'
    expect(browser().location().url()).toBe '/'

  it 'should automatically redirect to / when location hash/fragment is invalid', ->
    browser().navigateTo '#/foo-bar-bas'
    expect(browser().location().url()).toBe '/'

  it 'should not automatically redirect to / when location hash/fragment is valid', ->
    browser().navigateTo '#/about'
    expect(browser().location().url()).toBe '/about'
```

```JavaScript
// JavaScript
describe('default route', function () {
  it('should automatically redirect to / when location hash/fragment is empty', function () {
    browser().navigateTo('index.html');
    expect(browser().location().url()).toBe('/');
  });

  it('should automatically redirect to / when location hash/fragment is invalid', function () {
    browser().navigateTo('#/foo-bar-bas');
    expect(browser().location().url()).toBe('/');
  });

  it('should not automatically redirect to / when location hash/fragment is valid', function () {
    browser().navigateTo('#/about');
    expect(browser().location().url()).toBe('/about');
  });
});
```

#####should contain `expected text` [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'my view', ->
  beforeEach ->
    browser().navigateTo '#/'

  it 'should contain expected text', ->
    expect(element('[ng-view] p:first').text()).toBe 'this is the home page.'
```

```JavaScript
// JavaScript
describe('my view', function () {
  beforeEach(function () {
    browser().navigateTo('#/');
  });

  it('should contain expected text', function () {
    expect(element('[ng-view] p:first').text())
      .toBe('this is the home page.');
  });
});
```

#####should contain my `directive tag` [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'my view', ->
  beforeEach ->
    browser().navigateTo '#/'

  it 'should contain my directive tag', ->
    elm = element('[ng-view] my-dir')
    expect(elm.count()).toBe 1
```

```JavaScript
// JavaScript
describe('my view', function () {
  beforeEach(function () {
    browser().navigateTo('#/');
  });

  it('should contain my directive tag', function () {
    var elm = element('[ng-view] my-dir');
    expect(elm.count()).toBe(1);
  });
});
```

#####should contain my `directive attribute` [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'my view', ->
  beforeEach ->
    browser().navigateTo '#/'

  it 'should contain my directive attribute', ->
    elm = element('[ng-view] [my-dir]')
    expect(elm.count()).toBe 1
```

```JavaScript
// JavaScript
describe('my view', function () {
  beforeEach(function () {
    browser().navigateTo('#/');
  });

  it('should contain my directive attribute', function () {
    var elm = element('[ng-view] [my-dir]');
    expect(elm.count()).toBe(1);
  });
});
```

#####should contain my `directive class name` [&#8593;](#testing-patterns)
```CoffeeScript
# CoffeeScript
describe 'my view', ->
  beforeEach ->
    browser().navigateTo '#/'

  it 'should contain my directive class name', ->
    elm = element('[ng-view] .my-dir')
    expect(elm.count()).toBe 1
```

```JavaScript
// JavaScript
describe('my view', function () {
  beforeEach(function () {
    browser().navigateTo('#/');
  });

  it('should contain my directive class name', function () {
    var elm = element('[ng-view] .my-dir');
    expect(elm.count()).toBe(1);
  });
});
```


---

### Protractor [&#8593;](#end-to-end-testing-frameworks)

[Protractor](https://github.com/angular/protractor) is an end to end test framework for [Angular](http://angularjs.org/) applications built on top of [WebDriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs).

#### Install Dependencies

* Install [protractor](https://github.com/angular/protractor) by running `npm install protractor --save-dev`

#### JavaScript [&#8593;](#end-to-end-testing-frameworks)

Disclaimer: I haven't used protractor yet and frankly it looked a bit complicated to get setup correctly, whereas using angular-scenario is dead simple.

*[pull request welcome!](../#contributing-test-patterns)*

#### CoffeeScript [&#8593;](#end-to-end-testing-frameworks)

Looks like it does have a CoffeeScript [preprocessor plugin](https://github.com/angular/protractor/issues/38).