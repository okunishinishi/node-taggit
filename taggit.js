/**
 * Create remote git tag.
 * @function taggit
 * @param {object} [options] - Optional settings.
 * @param {string} [options.tagName=('v'+pkg.version)] - Name of tag on git. By default, name is resolved form package.json.
 * @param {function} callback - Callback when done.
 */

"use strict";

var fs = require('fs'),
    path = require('path'),
    util = require('util'),
    async = require('async'),
    childProcess = require('child_process');

function _spawn(command, args, callback) {
    var spwaned = childProcess.spawn(command, args, {});
    spwaned.stdout.pipe(process.stdout);
    spwaned.stderr.pipe(process.stderr);
    spwaned.on('close', function (exitCode) {
        var success = exitCode === 0,
            err = success ? null : new Error(['Spawn', command, 'failed.'].join(' '));
        callback(err);
    });
    return spwaned;
}

function _tagName() {
    var filepaths = [
        'package.json',
        'bower.json'
    ];
    for (var i = 0; i < filepaths.length; i++) {
        try {
            var filepath = require.resolve(path.resolve(filepaths[i])),
                content = JSON.parse(fs.readFileSync(filepath));
            return 'v' + content.version;
        } catch (e) {
            // Do nothing.
        }
    }
    return null;
}

function _tagExists(tagName, callback) {
    var command = util.format('git tag -l %s', tagName);
    childProcess.exec(command, function (err, stdOut, stdErr) {
        callback(err || stdErr || null, !!stdOut);
    });
}

/** @lends taggit */
function taggit(options, callback) {
    options = options || {};
    var tagName = options.tagName || _tagName();
    if (!tagName) {
        callback(new Error('Failed to find tag name.'));
        return;
    }
    async.waterfall([
        function (callback) {
            _tagExists(tagName, callback);
        },
        function (exists, callback) {
            if (exists) {
                callback(new Error('Tag already exists: ' + tagName));
                return;
            }
            async.series([
                function addTag(callback) {
                    _spawn('git', ['tag', tagName], callback);
                },
                function pushTag(callback) {
                    _spawn('git', ['push', '--tags'], callback);
                }
            ], callback);
        }
    ], callback);
}

module.exports = taggit;