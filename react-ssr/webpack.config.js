const argv = require('yargs-parser')(process.argv.slice(2));//用来获取 mode的环境变量
const merge = require('webpack-merge');
const { resolve, join, basename } = require('path');
const webpack = require('webpack');

const _mode = argv.mode || 'development';
const _modeflag = _mode == 'production';
let _mergeConfig = '';
if(argv.env == 'sever'){
    _mergeConfig = require('./build/webpack.server.js');
}else{
    _mergeConfig = require(`./build/webpack.${_mode}.js`);
}

let webpackConfig = {
	module: {
		rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    // {loader:'css-loader',options:{minimize: false, importLoaders:1}},
                    {loader:'css-loader'},
                    // {loader: 'postcss-loader',options:{config: {path: resolve(__dirname, './postcss.config.js')} }}
                    {loader: 'postcss-loader'}
                ]
            },
			{
				test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
                exclude: /node_modules/,
				use: [{
                	loader: 'file-loader',
                	options: {
                	    name: _modeflag ? 'images/[name].[hash:5].[ext]' : 'images/[name].[ext]'
                	}
            	}]
			}
       	]
	},
	plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(_mode),
        }),
    ],
	resolve: {
        modules: [
            resolve(__dirname, 'node_modules'), // 使用绝对路径指定 node_modules，不做过多查询
        ],
        // 删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
        extensions: [".js", ".css", '.jsx']
    }
};

module.exports = merge(webpackConfig, _mergeConfig);
