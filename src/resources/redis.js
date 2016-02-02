'use strict';

var config = require('config');
var Promise = require('bluebird');
var redis = require('redis');

var redisParams = config.cache;
var redisClient = redis.createClient(
  redisParams.port,
  redisParams.host
);
var PromisifiedCache = Promise.promisifyAll(redisClient);

module.exports = {
  client: PromisifiedCache
};
