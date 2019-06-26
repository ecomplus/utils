'use strict'

const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    library: 'EcomUtils',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'ecom-utils.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'tests'),
    compress: true,
    port: 9314,
    open: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
