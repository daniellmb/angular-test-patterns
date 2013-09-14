require('coffee-script');
var util = require('./lib/tester.util');

//find specs
var specs = util.findSpecs();

//load them
util.loadSpecs(specs);

//run them
util.runSpecs();