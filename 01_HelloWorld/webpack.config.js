const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "all.js",
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './',
    port: '8080',
    inline: true,
    hot:true
  }
};