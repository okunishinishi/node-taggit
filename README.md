taggit
====

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]


Node.js module to create a tag on remote git with version number in package.json (or bower.json)

Usage
---------

Call `taggit()` at project root path where `package.json` exists.

```javascript

var taggit = require('taggit');

// Create remote git tag named with package.json version. (eg. v1.0.0)
taggit({
    // Options
}, function (err) {
    
});

```

Available options
---------

| Key | Default | Description |
| --- | --- | --- |
| tagName | ('v'+pkg.version) | Name of tag on git. By default, name is resolved form package.json. |


Installation
---------

```bash
$ npm install taggit  --save-dev
```


Using with CLI
---------

Install as a global module.

```bash
$ npm install taggit -g
```

Then,

```bash
$ taggit -t "v0.0.5"
```



License
-------
This software is released under the [MIT License][my_license_url].

[my_repo_url]: https://github.com/okunishinishi/node-taggit
[my_travis_url]: http://travis-ci.org/okunishinishi/node-taggit
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-taggit.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-taggit/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-taggit
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-taggit.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-taggit.svg?style=flat
[my_coverage_url]: http://okunishinishi.github.io/node-taggit/coverage/lcov-report
[my_npm_url]: http://www.npmjs.org/package/taggit
[my_npm_budge_url]: http://img.shields.io/npm/v/taggit.svg?style=flat
