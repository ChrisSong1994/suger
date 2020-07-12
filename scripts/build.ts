const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const basePath = path.resolve(__dirname, '..')
const entryPath = path.resolve(basePath, 'src/index.ts')
const outPutPath = path.resolve(basePath, 'lib')

const config = {
  mode: 'production',
  entry: entryPath,
  output: {
    path: outPutPath,
    filename: 'suger.js',
    library: 'suger',
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
}

const compiler = webpack(config)

compiler.run((err: any, stats: any) => {
  console.log(err, stats)
})
