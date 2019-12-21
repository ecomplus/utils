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
// handle Webpack output object and plugins
const webpackOutput = { ...webpackConfig.output }
const webpackPlugins = (webpackConfig.plugins && webpackConfig.plugins.concat()) || []
// additional Webpack plugins
const CopyPlugin = require('copy-webpack-plugin')

// main directories
const srcPath = path.resolve(process.cwd(), 'src')
const outputPath = webpackOutput.path

const fatalError = err => {
  if (err) {
    console.error(err)
  }
  // exit with failure
  process.exit(1)
}

// setup config for multiple outputs
const webpackConfigList = []

;[
  '.polyfill',
  '.runtime',
  ''
].forEach(outputType => {
  const config = {
    ...webpackConfig,
    output: {
      ...webpackOutput,
      // custom filename by output type
      filename: webpackOutput.filename.replace('.js', `${outputType}.min.js`)
    }
  }

  // edit Webpack config by output type
  if (outputType !== '.polyfill') {
    // standalone lib output
    // ignore package dependencies
    config.externals = /^(@babel\/runtime|core-js)/i

    if (outputType === '.runtime') {
      // remove Babel module to skip transpilation
      delete config.module
    } else {
      // copy source to output
      config.plugins = webpackPlugins.concat([
        new CopyPlugin([{ from: srcPath, to: outputPath }])
      ])
    }
  }
  webpackConfigList.push(config)
})

webpack(webpackConfigList, (err, stats) => {
  // console.log(stats)
  if (err) {
    fatalError(err)
  }

  // check and handle webpack errors and warnings
  const info = stats.toJson()
  if (stats.hasErrors()) {
    fatalError(info.errors)
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
        } else if (file.endsWith('.js') && !file.endsWith('.min.js')) {
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
