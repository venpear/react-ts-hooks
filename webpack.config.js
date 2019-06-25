const argv = require('yargs-parser')(process.argv.slice(2)) // 解析process 环境变量
const merge = require('webpack-merge')
const { join, resolve } = require('path') 
const _mode = argv.mode || 'development'
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const { CheckerPlugin } = require('awesome-typescript-loader') // ts loader
const webpackConfig = {
  entry: {
    app: resolve('./src/web/index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('./src')],
        exclude: /node_modules/,
        // loader: 'awesome-typescript-loader'
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}
module.exports = merge(webpackConfig, _mergeConfig)




