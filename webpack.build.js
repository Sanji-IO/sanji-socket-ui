'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-socket-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjSocket';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'angular-socket-io': {
    root: 'ngSocketIO',
    commonjs2: 'angular-socket-io',
    commonjs: 'angular-socket-io',
    amd: 'angular-socket-io'
  },
  'socket.io-client': {
    root: 'io',
    commonjs2: 'socket.io-client',
    commonjs: 'socket.io-client',
    amd: 'socket.io-client'
  }
};

config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);
module.exports = config;
