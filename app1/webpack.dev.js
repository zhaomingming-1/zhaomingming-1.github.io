const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
    // 入口
    entry: {
        main: './src/main.js'
    },
    // 模式
    mode: 'development',//打包的模式production/development
    // 出口/输出[name]进去叫什么出来叫什么
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),//输出的路径
        publicPath: './'//代理路径
    },
    devServer: {//热更新（自动更新）
        contentBase: 'dist',//默认指向文件
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].html' } },
                    { loader: 'extract-loader' },
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]' } }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    }
}