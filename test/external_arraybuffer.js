'use strict';
const assert = require('assert');
const ref = require('../');
const inspect = require('util').inspect;

describe('external_arraybuffer', function() {

  it('should get an array buffer with number address', function() {
    const buf = Buffer.from('hello' + '\0');
    const address = ref.address(buf);
    const ab = ref.readExternalArrayBuffer(address, 6);
    assert.strictEqual(typeof ab, 'object');
    const buffer = Buffer.from(ab);
    const address2 = ref.address(buffer);
    assert.strictEqual(address, address2);
    assert.strictEqual('hello', buffer.readCString());
    // when buffer gets changed, the original buf should be changed too
    buffer.writeCString('olleh');
    assert.strictEqual('olleh', buf.readCString());
  });
  
  it('should get an array buffer with string address', function() {   
    const buf = Buffer.from('hello' + '\0'); 
    const hexAddress = ref.hexAddress(buf);
    const ab = ref.readExternalArrayBuffer('0x' + hexAddress, 6);
    assert.strictEqual(typeof ab, 'object');
    const buffer = Buffer.from(ab);
    const address2 = ref.hexAddress(buffer);
    assert.strictEqual(hexAddress, address2);
    assert.strictEqual('hello', buffer.readCString());
    // when buffer gets changed, the original buf should be changed too
    buffer.writeCString('olleh');
    assert.strictEqual('olleh', buf.readCString());
  });
});