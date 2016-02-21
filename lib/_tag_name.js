/**
 * @private
 * @function _tagName
 */

"use strict";

const fs = require('fs'),
    path = require('path');

/** @lends _tagName */
function _tagName(cwd) {
    let filepaths = [
        'package.json',
        'bower.json'
    ];

    for (let i = 0; i < filepaths.length; i++) {
        try {
            let filepath = require.resolve(path.resolve(cwd || process.cwd(), filepaths[i])),
                content = JSON.parse(fs.readFileSync(filepath));
            return 'v' + content.version;
        } catch (e) {
            // Do nothing.
        }
    }
    return null;
}

module.exports = _tagName;
