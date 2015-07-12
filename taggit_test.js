/**
 * Test for taggit.
 * Runs with nodeunit
 */

"use strict";

var taggit = require('./taggit'),
    childProcess = require('child_process');

var spawn = childProcess.spawn;

exports.setUp = function (done) {
    childProcess.spawn = function mockSpawn() {
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
    };
    done();
};

exports.tearDown = function (done) {
    childProcess.spawn = spawn;
    done();
};


exports['Do tag git.'] = function (test) {
    taggit({}, function (err) {
        test.ifError(err);
        test.done();
    });
};