#!/usr/bin/env node

'use strict'

process.env.NODE_ENV = 'production'

// Node.js modules
const path = require('path')
const fs = require('fs')

// run Babel programmatically
const babel = require('@babel/core')
// build bundle with Webpack
const webpack = require('webpack')
const webpackConfig = require(path.join(process.cwd(), 'webpack.config'))

// main directories
const srcPath = path.resolve(process.cwd(), 'src')
const outputPath = webpackConfig.output.path
const outputFilename = webpackConfig.output.filename

// additional Webpack plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
if (!webpackConfig.plugins) {
  webpackConfig.plugins = []
}
webpackConfig.plugins.push(
  new CleanWebpackPlugin(),
  new CopyPlugin([{ from: srcPath, to: outputPath }])
)

const fatalError = err => {
  if (err) {
    console.error(err)
  }
  // exit with failure
  process.exit(1)
}

webpack(webpackConfig, (err, stats) => {
  // console.log(stats)
  if (err) {
    fatalError(err)
  }

  // check and handle webpack errors and warnings
  const info = stats.toJson()
  if (stats.hasErrors()) {
    let err = info.errors
    fatalError(err)
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  // tranform each module with Babel
  const readDir = dir => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        fatalError(err)
      }

      files.forEach(file => {
        const filepath = path.join(dir, file)
        if (fs.lstatSync(filepath).isDirectory()) {
          readDir(filepath)
        } else if (file.endsWith('.js') && !file.startsWith(outputFilename)) {
          // is JS file
          // isn't the Webpack output bundle
          // transform JS code
          // https://babeljs.io/docs/en/babel-core
          const { code } = babel.transformFileSync(filepath)
          // overwrite module file with transpiled JS code
          fs.writeFile(filepath, code, err => {
            if (err) {
              console.error(err)
            }
          })
        }
      })
    })
  }

  // read output path recursively
  readDir(outputPath)
})
