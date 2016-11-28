const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const appRoot = path.join(__dirname, 'app');
const config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-socket-ui.js'
  },
  resolve: {
    extensions: ['.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/, enforce: 'pre' },
      {test: /\.js$/, loader: 'babel-loader?cacheDirectory', exclude: /(node_modules)/}
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new LodashModuleReplacementPlugin,
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV
    })
  ]
};

module.exports = config;
