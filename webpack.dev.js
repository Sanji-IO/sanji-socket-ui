'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.ip = 'localhost';
config.port = 8080;
config.debug = true;
config.devtool = 'eval';
config.entry = {
  'sanji-ui': [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + config.ip + ':' + config.port,
    './app.js'
  ]
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new WebpackNotifierPlugin({title: 'Webpack'}),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: 'body',
    hash: true
  })
);

module.exports = config;
