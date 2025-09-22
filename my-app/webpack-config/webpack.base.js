const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * 更新 Babel 配置以支持更现代的模块处理
 * 优化性能提示和资源大小限制
 * 简化并优化代码分割配置
 */

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'[name].[contenthash:5].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true, // 清空打包文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body' // script 打包到body标签里面
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash', // 将全局变量 _ 指向模块 lodash
        }),
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, '../src'), // 只转译 src
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, '../src'), // 只转译 src
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset',
                parser: { dataUrlCondition: { maxSize: 8 * 1024 } } // 8 KB 以内转 base64
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, '../src'), // 只转译 src
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false, // 不转换模块语法，让webpack处理
                                useBuiltIns: 'usage', // 按需加载polyfill
                                corejs: 3 // 指定corejs版本
                            }],
                            ['@babel/preset-react', { runtime: 'automatic' }] // 支持新版 JSX
                        ]
                    }
                },
                include: path.resolve(__dirname, '../src'), // 只转译 src
            },
            {
                test: /page-hoc-route\.js$/,  // 只处理一个虚拟文件
                use: [path.resolve(__dirname, '../loaders/page-collector.js')],
            }
        ],
    },
    // 优化代码的
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),    // js代码压缩的
        ],
        realContentHash: true, // 输出文件名中包含内容哈希值
        splitChunks: {
            chunks: 'all', // 所有类型的模块都进行拆分
        }

    },
    cache: {
        type: 'filesystem',          // 缓存到磁盘
        buildDependencies: { config: [__filename] } // 配置变动自动失效
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : 'warning',
        maxEntrypointSize: 20428 * 1024,   // 入口包 ≤ 2 MB
        maxAssetSize: 20428 * 1024,        // 单个资源 ≤ 2 MB
        assetFilter: (name) => name.endsWith('.js') || name.endsWith('.css') //只统计特定后缀文件
    },
    resolve: {
        extensions: ['.js', '.jsx']      // import 时可省略后缀
    }
};
