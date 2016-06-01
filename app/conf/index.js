'use strict';

var nconf = require('nconf');


// Only pull in these vars from env
var envVars = [
  'NODE_ENV',
  'NODE_PORT',
  'PORT',
  'SLACK_TOKEN'
];

var Config = function() {
  nconf.argv().env(envVars);
  var environment = nconf.get('NODE_ENV') || 'dev';
  nconf.file(environment, 'app/conf/' + environment.toLowerCase() + '.json');
  nconf.file('default', 'app/conf/default.json');
};

Config.prototype.get = function(key) {
  return nconf.get(key);
};


module.exports = new Config();
