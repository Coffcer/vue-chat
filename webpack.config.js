var path = require('path');

module.exports = {
    // 入口
    entry: {
        script: './src/chat'
    },
    // 输出
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
        publicPath: '/build'
    },
    module: {
        // 加载器
        loaders: [
            // 使用Babel转换ES6，排除node_modules目录下的js
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less/, loader: 'style!css!autoprefixer!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map'
};
