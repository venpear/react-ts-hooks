const { join } = require('path')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier'); // 错误提醒
module.exports = {
  devServer: {
    hot: true,
    contentBase: join(__dirname, '../dist'),
    historyApiFallback: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(), // 友好的终端报错
    new WebpackBuildNotifierPlugin({
      title: "React typescript",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    })
  ]
}