1. 创建package.json项目配置文件
   cnpm init
2. 安装webpack，并设置为项目依赖，前提要线全局安装webpack
   cnpm install --save-dev webpack
3. 创建一个webpack.config.js文件, [参考文档](https://webpack.js.org/configuration/)
```
// webpack.config.js
const path = require('path');
module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "all.js", // string
  }
}
```
4. 安装babel，[参考文档](https://github.com/babel/babel-loader)
   cnpm install --save-dev babel-loader babel-core babel-preset-es2015
```
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
```
5. 安装react、react-dom和babel-preset-react
   cnpm install --save-dev react react-dom babel-preset-react
6. 修改webpack.config.js，增加一个babel翻译的配置项presets
```
presets: ['es2015','react']
```
6. 修改webpack.config.js，新增自动webpack
   watch: true
7. 启动webpack