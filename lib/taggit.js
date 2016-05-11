/**
 * Create remote git tag.
 * @function taggit
 * @param {object} [options] - Optional settings.
 * @param {string} [options.tag=('v'+pkg.version)] - Name of tag on git. By default, name is resolved form package.json.
 * @param {string} [options.cwd=process.cwd()] - Working directory path.
 * @param {function} callback - Callback when done.
 */

'use strict'

const async = require('async')
const argx = require('argx')
const execcli = require('execcli')
const co = require('co')
const _tagExists = require('./_tag_exists')
const _tagName = require('./_tag_name')

/** @lends taggit */
function taggit (options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no longer supported. Use promise interface instead.')
  }
  options = args.pop('object') || {}
  let cwd = options.cwd || process.cwd()
  let tagName = options.tag || _tagName(cwd)
  if (!tagName) {
    throw new Error('Failed to find tag name.')
  }
  return co(function * () {
    let exists = yield _tagExists(tagName)
    if (exists) {
      throw new Error('Tag already exists: ' + tagName)
    }
    yield execcli('git', [ 'tag', tagName ])
    yield execcli('git', [ 'push', '--tags' ])
  })
}

module.exports = taggit
