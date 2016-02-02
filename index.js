'use strict';

var log = require('./src/components/logger')
  .get();
var sayHello = require('./src/sayHello');

// Set the default timezone at UTC
process.env.TZ = 'UTC';

// Catch all uncaught exception, log it and then die properly
process.on('uncaughtException', function (err) {
  log.fatal('uncaught-exception', err);
  process.exit(1);
});

// Start the hello worker
sayHello.run();
