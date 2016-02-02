'use strict';

var Promise = require('bluebird');
var config = require('config');

var log = require('../components/logger')
  .create({ module: 'sayHello' });

module.exports = function () {
  return new Promise(function (resolve, reject) {
    log.info('app-speaks', config.greetings);
    resolve(true);
  });
};
