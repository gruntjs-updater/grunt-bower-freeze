'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.bowerfreeze = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default/bower-frozen.json');
        var expected = grunt.file.read('test/expected/default-frozen.json');
        test.equal(actual, expected, 'should contain the same');

        test.done();
    },
    missing_resolutions: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/missing-resolutions/bower-frozen.json');
        var expected = grunt.file.read('test/expected/missing-resolutions-frozen.json');
        test.equal(actual, expected, 'should contain the same');

        test.done();
    },
};
