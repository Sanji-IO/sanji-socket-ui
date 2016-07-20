'use strict';

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV;
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'app');
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-socket-ui.js'
  },
  resolve: {
    root: [nodeRoot],
    // npm-linked packages can locate missing dependencies in app's node_modules
    fallback: nodeRoot,
    alias: {},
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: /(node_modules)/}
    ],
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel?cacheDirectory', exclude: /(node_modules)/}
    ],
    noParse: []
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV
    }),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
