/**
 * @private
 * @function _tagName
 */

'use strict'

const fs = require('fs')
const path = require('path')

/** @lends _tagName */
function _tagName (cwd) {
  let filenames = [
    'package.json',
    'bower.json'
  ]

  for (let i = 0; i < filenames.length; i++) {
    try {
      let filename = require.resolve(path.resolve(cwd || process.cwd(), filenames[ i ]))
      let content = JSON.parse(fs.readFileSync(filename))
      return 'v' + content.version
    } catch (e) {
      // Do nothing.
    }
  }
  return null
}

module.exports = _tagName
