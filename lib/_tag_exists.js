/**
 * @function _tagExists
 * @private
 */

"use strict";

const util = require('util'),
    childProcess = require('child_process');

/** @lends _tagExists */
function _tagExists(tagName, callback) {
    let command = util.format('git tag -l %s', tagName);
    childProcess.exec(command, (err, stdOut, stdErr) => {
        callback(err || stdErr || null, !!stdOut);
    });
}

module.exports = _tagExists;
