/**
 * @function _tagExists
 * @private
 */

'use strict'

const childProcess = require('child_process')

/** @lends _tagExists */
async function _tagExists(tagName) {
  const command = `git tag -l ${tagName}`
  const stdOut = await new Promise((resolve, reject) =>
    childProcess.exec(command, (err, stdOut, stdErr) =>
      (err || stdErr) ? reject(err || stdErr) : resolve(stdOut)
    )
  )
  return !!stdOut
}

module.exports = _tagExists
