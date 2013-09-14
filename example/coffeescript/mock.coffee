###
Example AngularJS Application
=============================

Service Mocks
-------------
###

# Declare my service mock
MockMySvc = ->
  'use strict'

  # Methods
  @myMethod = jasmine.createSpy('myMethod')

  this