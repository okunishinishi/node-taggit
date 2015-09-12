/**
 * Create remote git tag.
 * @function taggit
 * @param {object} [options] - Optional settings.
 * @param {string} [options.tagName=('v'+pkg.version)] - Name of tag on git. By default, name is resolved form package.json.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    argx = require('argx'),
    execcli = require('execcli'),
    _tagExists = require('./_tag_exists'),
    _tagName = require('./_tag_name');



/** @lends taggit */
function taggit(options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
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
                    execcli('git', ['tag', tagName], callback);
                },
                function pushTag(callback) {
                    execcli('git', ['push', '--tags'], callback);
                }
            ], callback);
        }
    ], callback);
}

module.exports = taggit;