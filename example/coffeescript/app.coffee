###
Example AngularJS Application
=============================

Please Note: that this example is configured into a single file to be succinct... not maintainable.
You'll want to break yours out into separate files and folders as needed.

Configure Application
---------------------

Declare module dependencies and routes, then create and configure the app.
###

'use strict'

# Declare module dependencies
dependencies = [
  'ngSanitize'
]

# Configure app
config = ($routeProvider) ->
  $routeProvider
  .when '/',
    # Use the same partial views for for all languages
    templateUrl: '../views/home.html'
    controller: 'myCtrl'
  .when '/about',
    # Use the same partial views for for all languages
    templateUrl: '../views/about.html'
  .otherwise
    redirectTo: '/'

# Create app module and configure it
angular
.module('myApp', dependencies)
.config [
  '$routeProvider'
  config
]

###
Application Controllers
----------------------
###

# Define My Controller
angular.module('myApp')
.controller 'myCtrl',
['$scope', '$http', 'mySvc',
($scope, $http, mySvc) ->
  # Attach data types
  $scope.myThing = {}
  $scope.myArray = []
  $scope.myBoolean = yes
  $scope.myDate = new Date()
  $scope.myMethod = ->
    'Not implemented'
  $scope.myNull = null
  $scope.myNumber = 1337
  $scope.myObject = {}
  $scope.myRegExp = /\s/
  $scope.myString = 'test'
  $scope.myUndefined = undefined
  # Call service method
  mySvc.myMethod({})
]

###
Application Directives
----------------------
###

# Define My Directive
angular.module('myApp')
.directive 'myDir', [ ->
  template: '<div></div>'
  restrict: 'EAC'
  link: (scope, element, attrs) ->
    element.text 'this is my directive'
]

###
Application Filters
----------------------
###

# Define My Filter
angular.module('myApp')
.filter 'myFltr', [ ->
  (input) ->
    "my filter: #{input}"
]

###
Application Services
----------------------

Rather than putting everything in a single return, this pattern of breaking out the exports into
separate functions encurages simple methods that have a single purpose.
###

# Define My Service
angular.module('myApp')
.factory 'mySvc', [ ->
  ###
  Adds public myMethod to the api
  ###
  exportMyMethod = (api) ->
    api.myMethod = ->
      'Not implemented'

  ###
  Builds the public API for this factory
  ###
  getAPI = ->
    #export public properties
    publicAPI =
      myThing: {}
      myArray: []
      myBoolean: true
      myDate: new Date()
      myNull: null
      myNumber: 1337
      myObject: {}
      myRegExp: /\s/
      myString: 'test'
      myUndefined: undefined

    # add public methods
    exportMyMethod publicAPI
    
    # return api
    publicAPI

  # return public API
  getAPI()
]

###
Application Constants
----------------------
###

# Define My Constant
angular.module('myApp')
.constant 'myConst', 42