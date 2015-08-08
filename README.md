taggit
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-taggit
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-taggit
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-taggit.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-taggit/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-taggit
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-taggit.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-taggit.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-taggit
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-taggit.svg
[bd_npm_url]: http://www.npmjs.org/package/taggit
[bd_npm_shield_url]: http://img.shields.io/npm/v/taggit.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Create a tag on remote git with version number in package.json (or bower.json)

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install taggit --save-dev
```

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

Options
---------

| Key | Default | Description |
| --- | --- | --- |
| tagName | ('v'+pkg.version) | Name of tag on git. By default, name is resolved form package.json. |

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

<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-taggit/blob/master/LICENSE).

<!-- LICENSE End -->


