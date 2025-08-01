const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const pro = require('./webpack.pro.js');
const dev = require('./webpack.dev.js');

module.exports = (env, argv) => {

    let config = argv.mode === 'development' ? dev : pro;
    // 合并配置
    config = merge(base, config);
    return config;
};

