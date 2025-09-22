module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3003,
        open: false,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};