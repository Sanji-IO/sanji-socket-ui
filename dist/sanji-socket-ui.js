!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("angular-socket-io"),require("socket.io-client")):"function"==typeof define&&define.amd?define(["angular","angular-socket-io","socket.io-client"],t):"object"==typeof exports?exports.sjSocket=t(require("angular"),require("angular-socket-io"),require("socket.io-client")):e.sjSocket=t(e.angular,e.ngSocketIO,e.io)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),a=[],f=function(){function e(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];r(this,e),e.$inject.forEach(function(e,n){return t[e]=o[n]}),this.config={path:"/sanji",transportOptions:{polling:{extraHeaders:{Authorization:""}}}},this.configure=function(e){return Object.assign(t.config,e)}}return i(e,[{key:"$get",value:["socketFactory",function(e){"ngInject";function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,o=c.default.connect(Object.assign({},this.config,t));return e({ioSocket:o})}var n=this.config;return{connect:t}}]}]),e}();f.$inject=a,t.default=f},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjSocket=void 0;var r=n(1),i=o(r);n(2);var u=n(0),c=o(u),a=i.default.module("sanji.socket",["btford.socket-io"]).provider("sjio",c.default).name;t.sjSocket=a}])});