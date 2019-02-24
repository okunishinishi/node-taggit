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
  before(async () => {
    injectmock(childProcess, 'spawn', function mockSpawn() {
      return {
        stdout: {
          pipe() {
          }
        },
        stderr: {
          pipe() {

          }
        },
        on(event, callback) {
          setTimeout(function () {
            callback(0)
          }, 2)
        }
      }
    })
    injectmock(childProcess, 'exec', function mockExec(comand, callback) {
      callback(null, null)
    })
  })

  after(async () => {
    injectmock.restoreAll()
  })

  it('Do tag git.', async () => {
    await taggit({})
  })
})

/* global describe, before, after, it */
