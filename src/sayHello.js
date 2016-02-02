'use strict';

var log = require('./components/logger')
  .create({ module: 'getWorker' });

var redis = require('./resources/redis');
var lock = require('redis-lock')(redis.client);

var greetBuddies = require('./controllers/greetBuddies');

function run () {
  lock('helloWorker', function (done) {
    log.info('say-hello-start-run');

    return greetBuddies()
      .then(function () {
        setTimeout(function () {
          done();
          run();
        }, 6 * 1000);
      })
      .catch(function (err) {
        log.error('say-hello-run-error', err);
        setTimeout(function () {
          done();
          run();
        }, 6 * 1000);
      });
  });
}

module.exports = {
  run: run
};
