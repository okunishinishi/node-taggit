#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const coz = require('coz')

apeTasking.runTasks('build', [
  () => coz.render([
    '.*.bud',
    'bin/.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ])
], true)
