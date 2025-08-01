module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: false,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};