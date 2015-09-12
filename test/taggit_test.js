/**
 * Test for taggit.
 * Runs with nodeunit
 */

"use strict";

var taggit = require('../lib/taggit'),
    injectmock = require('injectmock'),
    childProcess = require('child_process');

exports.setUp = function (done) {
    injectmock(childProcess, 'spawn', function mockSpawn() {
        return {
            stdout: {
                pipe: function () {
                }
            },
            stderr: {
                pipe: function () {

                }
            },
            on: function (event, callback) {
                setTimeout(function () {
                    callback(0);
                }, 2);
            }
        }
    });
    injectmock(childProcess, 'exec', function mockExec(comand, callback) {
        callback(null, null);
    });
    done();
};

exports.tearDown = function (done) {
    injectmock.restoreAll();
    done();
};


exports['Do tag git.'] = function (test) {
    taggit({}, function (err) {
        test.ifError(err);
        test.done();
    });
};