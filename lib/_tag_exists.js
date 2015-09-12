/**
 * @function _tagExists
 * @private
 */

"use strict";

var util = require('util'),
    childProcess = require('child_process');

/** @lends _tagExists */
function _tagExists(tagName, callback) {
    var command = util.format('git tag -l %s', tagName);
    childProcess.exec(command, function (err, stdOut, stdErr) {
        callback(err || stdErr || null, !!stdOut);
    });
}

module.exports = _tagExists;
