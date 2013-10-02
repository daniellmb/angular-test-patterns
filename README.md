# Angular Test Patterns [![Build Status](https://api.travis-ci.org/daniellmb/angular-test-patterns.png)](https://travis-ci.org/daniellmb/angular-test-patterns) [![Dependency Status](https://gemnasium.com/daniellmb/angular-test-patterns.png)](https://gemnasium.com/daniellmb/angular-test-patterns#tab-dev_dependencies)

High Quality Cut-n-Paste Guide for Testing your AngularJS [Controllers](patterns/controller.md), [Services](patterns/service.md), [Constants](patterns/constant.md), [Directives](patterns/directive.md) and [Filters](patterns/filter.md). As well as ideas on how to use [Mocks](patterns/mock.md), [End-to-End](patterns/e2e.md) tests, [Performance](patterns/performance.md) testing and [More](patterns/perceptualdiff.md)!

## Testing Patterns

* Unit Testing
  * [Controllers](patterns/controller.md#unit-testing-angularjs-controllers)
  * [Directives](patterns/directive.md#unit-testing-angularjs-directives)
  * [Filters](patterns/filter.md#unit-testing-angularjs-filters)
  * [Services](patterns/service.md#unit-testing-angularjs-services)
* End-to-end Scenarios (Integration)
  * [E2E Scenarios](patterns/e2e.md#end-to-end-testing-angularjs)
* [Using Mocks](patterns/mock.md#unit-testing-angularjs-using-mocks)
* [Test Coverage Enforcement](patterns/coverage.md#coverage-threshold-enforcement-for-angularjs)
* [Complexity Threshold Enforcement](patterns/complexity.md#complexity-threshold-enforcement-for-angularjs)
* [Performance Testing](patterns/performance.md#performance-testing-angularjs)
* [Perceptual Difference Testing](patterns/perceptualdiff.md#perceptual-difference-testing-angularjs)

## What's an AngularJS Test Pattern?
A test pattern is a proven way to ~~properly~~ test a given feature of your AngularJS application. It's a design pattern for testing.

## Why?
This started as a place for me to jot down the patterns I've been using while building several AngularJS projects.

## Contributing Test Patterns
**Pull Requests Welcome!** I would love see these patterns evolve over time from community input as
more refined approches are discovered. So *please share what's working well for you!*

### Prepare your environment
* Install [Node.js](http://nodejs.org) (NPM will come bundled).
* [Fork](http://help.github.com/forking) the [main repository](https://github.com/daniellmb/angular-test-patterns).
* Clone your Github repository: `git clone git@github.com:<github username>/angular-test-patterns.git`
* Go to the test patterns directory: `cd angular-test-patterns`
* Add the [main repository](https://github.com/daniellmb/angular-test-patterns) as an upstream remote to your repository: `git remote add upstream https://github.com/daniellmb/angular-test-patterns.git`
* Run `bash init-repo.sh` to initialize your local repository.

### To add a new test pattern
* Edit or create a markdown file to hold your new test pattern.
* Add a [test pattern section](spec/lib/parse.util.coffee.md#anatomy-of-a-test-pattern-section) for your pattern
   * In your new section add [code blocks](spec/lib/parse.util.coffee.md#anatomy-of-a-test-pattern-code-block) for each of the [supported languages](spec/config.json#L2).
   * Edit the [example applications](/example) to satisfy your new pattern.
* Run `npm test` to ensure the pattern is valid. This does the following:
   * Unit tests the [test pattern rules](#unit-testing-the-patterns).
   * Unit tests that each pattern follows those rules.
   * Unit tests the [example applications](/example) against the patterns.

### Unit Testing the Patterns
To ensure a clear and consistent style of test patterns, every block of code must pass the following [rules](spec/rules) via `npm test` The rules are written in literate CoffeeScript so they are nicely self-documenting.

* [Test Pattern Language is Supported](spec/rules/code-lang.spec.coffee.md)
* [Test Pattern Language is Commented](spec/rules/code-comment.spec.coffee.md)
* [Test Pattern Code is Valid](spec/rules/valid-code.spec.coffee.md)
* [Test Pattern is Lint-Free](spec/rules/lint-free.spec.coffee.md)

### To add a new pattern rule
* Create a new `<my-rule-name>.spec.coffee.md` literate CoffeeScript file in the `spec/rules` folder.
* Create a new `<my-rule-name>` folder in the `spec/fixtures` folder.
   * Add a text file for each of the supported languages, [see examples](spec/fixtures).
   * Make your fixture as specific as possible. For example, if you are testing that the pattern is [lint-free](spec/fixtures/lint-free/coffeescript.txt) you don't need to include a [code comment](spec/fixtures/code-comment/coffeescript.txt) as there is a separate test for that.
* Define your test pattern rule, [see examples](spec/rules).
* Run `npm run testRules` to ensure the rule passes using the fixtures.

### Submitting Your Changes
* Create and checkout a new branch off the master branch for your changes: `git checkout -b my-fix-branch master`
* Create your patch, make sure that all tests pass.
* Commit your changes and create a descriptive commit message (the commit message is used to generate release notes, please check out the [commit message conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y) and the commit message presubmit hook [validate-commit-msg.js](hooks/validate-commit-msg.js)): `git commit -a`
* Push your branch to Github: `git push origin my-fix-branch`
* In Github, send a pull request to `daniellmb:master`
* When the patch is reviewed and merged, delete your branch and pull yours — and other — changes from the main (upstream) repository:
   * Delete your branch in Github, run: `git push origin :my-fix-branch`
   * Check out the master branch, run: `git checkout master`
   * Delete your local branch, run: `git branch -D my-fix-branch`
   * Update your master with the latest upstream version, run: `git pull --ff upstream master`
* If you need to make changes to your pull request, you can update the commit with `git commit --amend`. Then, update the pull request with `git push -f`.

That's it! Thank you for your contribution!

## The Future
Once we have a solid set of robust testing patterns, I'd like to get them integrated into a [Yeoman](http://yeoman.io) AngularJS [generator](http://yeoman.io/generators.html).

## License 
The MIT License

Copyright (c) 2013 Daniel Lamb <daniellmb.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.