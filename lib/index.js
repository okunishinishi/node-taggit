/**
 * Create a tag on remote git with version number in package.json (or bower.json)
 * @module taggit
 * @version 1.2.1
 */

"use strict";

var taggit = require('./taggit'),
    pkg = require('../package.json');

var lib = taggit.bind(taggit);
lib.taggit = taggit;
lib.version = pkg.version;
module.exports = lib;