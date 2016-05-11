'use strict'

let basedir = __dirname;
process.chdir(basedir) //Move to project root.

const taggit = require('taggit')

// Create remote git tag named with package.json version. (eg. v1.0.0)
taggit({
    // Options
}, (err) => {
    /*...*/
})
