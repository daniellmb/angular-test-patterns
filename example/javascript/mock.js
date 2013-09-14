/*
Example AngularJS Application
=============================

Service Mocks
-------------
*/

// Declare my service mock
MockMySvc = function () {
  'use strict';

  // Methods
  this.myMethod = jasmine.createSpy('myMethod');

  return this;
};