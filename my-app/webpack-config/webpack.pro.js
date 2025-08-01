const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 10000,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                antd: {
                    test: /[\\/]node_modules[\\/]antd[\\/]/,
                    name: 'antd',
                    priority: 20,
                    chunks: 'all'
                },
                react: {
                    test: /[\\/]node_modules[\\/]react|react-dom[\\/]/,
                    name: 'react',
                    priority: 30,
                    chunks: 'all'
                },
                router: {
                    test: /[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/,
                    name: 'router',
                    priority: 25,
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    performance: {
        maxAssetSize: 2048 * 1024, // 2MB
        maxEntrypointSize: 2048 * 1024, // 2MB
        hints: 'warning'
    }
};