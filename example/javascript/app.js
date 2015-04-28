/**
Example AngularJS Application
=============================

Please Note: that this example is configured into a single file to be succinct... not maintainable.
You'll want to break yours out into separate files and folders as needed.

Configure Application
---------------------

Declare module dependencies and routes, then create and configure the app.
*/

'use strict';

// Declare module dependencies
var dependencies = [
  'ngRoute',
  'ngSanitize'
];

// Configure app
function config($routeProvider) {
  $routeProvider
  .when('/', {
    // Use the same partial views for all languages
    templateUrl: '../views/home.html',
    controller: 'myCtrl'
  })
  .when('/home2', {
    // Use the same partial views for all languages
    templateUrl: '../views/home2.html',
    controller: 'myCtrl2',
    controllerAs: 'ctrl'
  })
  .when('/about', {
    // Use the same partial views for all languages
    templateUrl: '../views/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}

// Create app module and configure it
angular
.module('myApp', dependencies)
.config([
  '$routeProvider',
  config
]);

/**
Application Controllers
----------------------
*/

// Define My Controller
angular.module('myApp')
.controller('myCtrl', ['$scope', '$http', 'mySvc',
function ($scope, $http, mySvc) {
  // Attach data types
  $scope.myThing = {};
  $scope.myArray = [];
  $scope.myBoolean = true;
  $scope.myDate = new Date();
  $scope.myMethod = function () {
    return 'Not implemented';
  };
  $scope.myNull = null;
  $scope.myNumber = 1337;
  $scope.myObject = {};
  $scope.myRegExp = /\s/;
  $scope.myString = 'test';
  $scope.myUndefined = undefined;
  // Call service method
  mySvc.myMethod({});
}]);

// Define My Controller As
angular.module('myApp')
.controller('myCtrl2', ['$http', 'mySvc',
function ($http, mySvc) {
  // Attach data types
  this.myThing = {};
  this.myArray = [];
  this.myBoolean = true;
  this.myDate = new Date();
  this.myMethod = function () {
    return 'Not implemented';
  };
  this.myNull = null;
  this.myNumber = 1337;
  this.myObject = {};
  this.myRegExp = /\s/;
  this.myString = 'test';
  this.myUndefined = undefined;
  // Call service method
  mySvc.myMethod({});
}]);


/*
Application Directives
----------------------
*/

// Define My Directive
angular.module('myApp')
.directive('myDir', [function () {
    return {
      template: '<div></div>',
      restrict: 'EAC',
      require: 'ngModel',
      link: function (scope, element, attrs) {
        return element.text('this is my directive');
      }
    };
  }
]);

/**
Application Filters
----------------------
*/

// Define My Filter
angular.module('myApp')
.filter('myFltr', [function () {
    return function (input) {
      return 'my filter: ' + input;
    };
  }
]);

/*
Application Services
----------------------

Rather than putting everything in a single return, this pattern of breaking out the exports into
separate functions encurages simple methods that have a single purpose.
*/

angular.module('myApp')
.factory('mySvc', function factoryInit(myVal) {

  // check for required dependency
  if (!myVal) {
    throw new Error('mySvc: myVal not provided');
  }

  /*
  Adds public myMethod to the api
  */
  function exportMyMethod(api) {
    api.myMethod = function () {
      return 'Not implemented';
    };
  }

  function getAPI() {
    // export public properties
    var publicAPI = {
      myThing: {},
      myArray: [],
      myBoolean: true,
      myDate: new Date(),
      myNull: null,
      myNumber: 1337,
      myObject: {},
      myRegExp: /\s/,
      myString: 'test',
      myUndefined: undefined
    };

    // add public methods
    exportMyMethod(publicAPI);

    // return api
    return publicAPI;
  }

  //return public API
  return getAPI();
})
// 'provide' global variable dependency (so it can be mocked)
.value('myVal', window.myVal);

/*
Application Constants
----------------------
*/

// Define My Constant
angular.module('myApp')
.constant('myConst', 42);