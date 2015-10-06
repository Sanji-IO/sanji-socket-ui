# sanji-socket-ui
> Sanji socket service is part of Sanji UI framework and also it is a angular
module. It just a socket wrapper for setup client socket.

[sanji-socket-ui-icon]: https://nodei.co/npm/sanji-socket-ui.png?downloads=true
[sanji-socket-ui-url]: https://npmjs.org/package/sanji-socket-ui
[quality-badge]: http://npm.packagequality.com/badge/sanji-socket-ui.png
[quality-url]: http://packagequality.com/#?package=sanji-socket-ui
[travis-build-badge]: https://travis-ci.org/Sanji-IO/sanji-socket-ui.svg?branch=master
[travis-build-url]: https://travis-ci.org/Sanji-IO/sanji-socket-ui
[sanji-socket-ui-coverage-image]: http://codecov.io/github/Sanji-IO/sanji-socket-ui/coverage.svg?branch=master
[sanji-socket-ui-coverage-url]: http://codecov.io/github/Sanji-IO/sanji-socket-ui?branch=master
[sanji-socket-ui-codacy-image]: https://api.codacy.com/project/badge/13d7e2e9bf1b40a3bd9a3113c7cea587
[sanji-socket-ui-codacy-url]: https://www.codacy.com/public/zack9433/sanji-socket-ui.git
[dependencies-image]: https://david-dm.org/Sanji-IO/sanji-socket-ui.png
[dependencies-url]: https://david-dm.org/Sanji-IO/sanji-socket-ui
[devdependencies-image]: https://david-dm.org/Sanji-IO/sanji-socket-ui/dev-status.png
[devdependencies-url]: https://david-dm.org/Sanji-IO/sanji-socket-ui#info=devDependencies
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

[![NPM][sanji-socket-ui-icon]][sanji-socket-ui-url]
[![Package Quality][quality-badge]][quality-url]
[![Build Status][travis-build-badge]][travis-build-url]
[![Coverage Status][sanji-socket-ui-coverage-image]][sanji-socket-ui-coverage-url]
[![Codacy Badge][sanji-socket-ui-codacy-image]][sanji-socket-ui-codacy-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]

## Dependencies
- [angularjs](https://github.com/angular/angular.js)
- [angular-socket-io](https://github.com/btford/angular-socket-io)

## Installation
Sanji socket service is based on es6 + webpack to development and embrace npm to install it.

```shell
npm install sanji-socket-ui --save
```

## How to use
You need to include module first.
```javascript
angular.module('webapp', ['sanji.socket'])
```
and then use `socket` as DI service.
```javascript
class AppController {
  constructor(socket) {
    socket.on('connect', () => {
      console.info('connected');
    });
  }
}
AppController.$inject = ['socket'];
```

## References
- [btford/angular-socket-io](https://github.com/btford/angular-socket-io)

## Contact

Author: Zack Yang &copy; 2015

* [@zack9433](https://twitter.com/zack9433)

Support: if you find any problems with this library,
[open issue](https://github.com/Sanji-IO/sanji-socket-ui/issues) on Github

