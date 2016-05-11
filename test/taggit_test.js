/**
 * Test for taggit.
 * Runs with mocha
 */

'use strict'

const taggit = require('../lib/taggit')
const injectmock = require('injectmock')
const co = require('co')
const assert = require('assert')
const childProcess = require('child_process')

describe('taggit', function () {
  before(() => co(function * () {
    injectmock(childProcess, 'spawn', function mockSpawn () {
      return {
        stdout: {
          pipe () {
          }
        },
        stderr: {
          pipe () {

          }
        },
        on (event, callback) {
          setTimeout(function () {
            callback(0)
          }, 2)
        }
      }
    })
    injectmock(childProcess, 'exec', function mockExec (comand, callback) {
      callback(null, null)
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Do tag git.', () => co(function * () {
    yield taggit({})
  }))
})

/* global describe, before, after, it */
