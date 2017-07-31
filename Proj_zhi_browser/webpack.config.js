"use strict"
var path = require("path");

module.exports = {
    devtool: "eval-source-map",//配置生成Source Maps，选择合适的选项
    
    entry: [path.resolve(__dirname, "src/main")],
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "build")
    },

    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader", query: { presets: ["es2015", "react", "stage-2"] }, exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", query: { presets: ["es2015", "react"] }, exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif|jpeg|webp)$/, loader: "url-loader" },
            { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: "url-loader" }
        ]
    },

     devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }

    
}
//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
//感叹号的作用在于使同一文件能够使用不同类型的loader