/**
 * Create a tag on remote git with version number in package.json (or bower.json)
 * @module taggit
 * @version 2.0.0
 */

'use strict'

const taggit = require('./taggit.js')
const pkg = require('../package.json')

let lib = taggit.bind(taggit)
Object.assign(lib, taggit, {
  taggit,
  version: pkg.version
})
module.exports = lib