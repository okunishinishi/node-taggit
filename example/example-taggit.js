var basedir = __dirname;
process.chdir(basedir); //Move to project root.

var taggit = require('taggit');

// Create remote git tag named with package.json version. (eg. v1.0.0)
taggit({
    // Options
}, function (err) {
    /*...*/
});
