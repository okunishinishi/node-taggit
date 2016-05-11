/**
 * @function _tagExists
 * @private
 */

'use strict'

const co = require('co')
const childProcess = require('child_process')

/** @lends _tagExists */
function _tagExists (tagName) {
  let command = `git tag -l ${tagName}`
  return co(function * () {
    let stdOut = yield new Promise((resolve, reject) =>
      childProcess.exec(command, (err, stdOut, stdErr) =>
        (err || stdErr) ? reject(err || stdErr) : resolve(stdOut)
      )
    )
    return !!stdOut
  })
}

module.exports = _tagExists
