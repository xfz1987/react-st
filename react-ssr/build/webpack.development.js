const path = require('path')
const rootPath = path.join(__dirname, '..')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
    	app: ['react-hot-loader/patch', rootPath + '/src/webapp/app.js']
    },
	output: {
		path: rootPath + '/dist/assets',
        publicPath: './',
        filename: "scripts/[name].js"
	},
    devtool:"#cheap-module-eval-source-map",
    devServer: {
    	host: '0.0.0.0',
    	port: 8888,
    	contentBase: path.join(__dirname, '../dist/assets/'),
    	hot: true,
    	watchContentBase: true,
    	compress: true,
    	publicPath: '/',
    	historyApiFallback: true,
    	overlay: {
      		errors: true
    	}
    },
    plugins: [
        new HTMLWebpackPlugin({
      		template: rootPath + '/src/webapp/index.html',
      		filename: rootPath + '/dist/assets/index.html'
    	}),
    	new webpack.NamedModulesPlugin(),
    	new webpack.HotModuleReplacementPlugin()
    ]
};