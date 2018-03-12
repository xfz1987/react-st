const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./app/main.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  devServer: {
  	contentBase: './',
  	host: 'localhost',
  	port: 9000,
  	// inline: false,
  	watchContentBase: true,
  	compress: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','stage-1','react'],
            plugins: ['transform-decorators-legacy','transform-decorators','transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  resolve:{
    extensions:['.js','.css','.jsx']
  }
};