var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(__dirname, './src/index.tpl.html'),
            filename: 'index.html'
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less'],
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    },

    devServer: {
        port: 8080,
        hot: true,
        contentBase: path.resolve(__dirname, './dist')
    }
}