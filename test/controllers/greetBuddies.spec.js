/* global describe it */

var assert = require('assert');
var greetBuddies = require('../../src/controllers/greetBuddies.js');

describe('greetBuddies', function () {
  it('should resolve true', function () {
    greetBuddies()
      .then(function (result) {
        assert.equal(result, true);
      });
  });
});
