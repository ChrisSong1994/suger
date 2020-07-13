const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const basePath = path.resolve(__dirname, './')
const entryPath = path.resolve(basePath, 'src/index.ts')
const outPutPath = path.resolve(basePath, 'lib')

const config = {
  mode: 'production',
  entry: entryPath,
  output: {
    path: outPutPath,
    filename: 'suger.js',
    library: 'suger',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.json', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      width: process.env.columns,
      clear: false,
    }),
  ],
}

const compiler = webpack(config)
compiler.run()
