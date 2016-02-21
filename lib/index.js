/**
 * Create a tag on remote git with version number in package.json (or bower.json)
 * @module taggit
 * @version 1.3.2
 */

"use strict";

const taggit = require('./taggit.js'),
    pkg = require('../package.json');

let lib = taggit.bind(taggit);
lib.taggit = taggit;
lib.version = pkg.version;
module.exports = lib;