'use strict';

var env = process.env;

module.exports = {
  logLevel: env.LOGLEVEL || 'info',
  httpPort: env.APP_PORT || env.PORT || 3000,
  greetings: 'Hello buddies!',
  cache: {
    host: env.CACHE_HOST || 'redis',
    port: env.CACHE_PORT || 6379
  }
};
