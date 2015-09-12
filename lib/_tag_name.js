/**
 * @private
 * @function _tagName
 */

"use strict";

var fs = require('fs'),
    path = require('path');

/** @lends _tagName */
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

module.exports = _tagName;
