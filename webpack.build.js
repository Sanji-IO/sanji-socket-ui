const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-socket-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjSocket';
config.externals = ['angular', 'angular-socket-io', 'socket.io-client'];

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
