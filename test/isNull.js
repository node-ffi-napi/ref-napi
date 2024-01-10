'use strict';
const assert = require('assert');
const ref = require('../');

describe('isNull', function() {
  it('should return "true" for the NULL pointer', function() {
    assert.strictEqual(true, ref.isNull(ref.NULL));
    assert.strictEqual(true, ref.NULL.isNull());
  });

  it('should return "true" for the NULL_POINTER', function () {
    assert.strictEqual(true, ref.isNullPointer(ref.NULL_POINTER));
    assert.strictEqual(true, ref.NULL_POINTER.isNullPointer());
  });

  it('should return "true" for a valid Buffer created from NULL', function () {
    assert.strictEqual(true, ref.isNullPointer(ref.ref(ref.NULL)));
  });

  it('should return "false" for a valid Buffer', function() {
    const buf = Buffer.from('hello');
    assert.strictEqual(false, ref.isNull(buf));
  });
});
