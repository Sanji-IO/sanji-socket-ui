!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("socket.io-client"),require("angular-socket-io")):"function"==typeof define&&define.amd?define(["angular","socket.io-client","angular-socket-io"],t):"object"==typeof exports?exports.sjSocket=t(require("angular"),require("socket.io-client"),require("angular-socket-io")):e.sjSocket=t(e.angular,e.io,e.ngSocketIO)}(this,function(e,t,o){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,o){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(3),i=n(c),a=["socketFactory"],s=function(){function e(t){r(this,e);var o=i.default.connect();return this.socket=t({ioSocket:o}),this.socket}return u(e,null,[{key:"socketFactory",value:function(t){return new e(t)}}]),e}();s.socketFactory.$inject=a,t.default=s},function(t,o){t.exports=e},function(e,t){e.exports=o},function(e,o){e.exports=t},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjSocket=void 0;var r=o(1),u=n(r);o(2);var c=o(0),i=n(c),a=u.default.module("sanji.socket",["btford.socket-io"]).factory("socket",i.default.socketFactory).name;t.sjSocket=a}])});