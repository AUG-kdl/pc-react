const fs = require('fs');
const path = require('path');
const { logPlugin } = require('@babel/preset-env/lib/debug');

module.exports = function pageCollector() {
    // 1️⃣ 定位 pages 目录
    const pagesDir = path.resolve(this.context, 'pages');

// 结果数组
    const result = [];

// 深度遍历
    (function walk(dir) {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
            const full = path.join(dir, item.name);
            if (item.isDirectory()) {
                walk(full); // 继续深入
            } else if (item.name === 'index.js') {
                // 收集文件内容
                const mod = require(full); // 已是转译后的 JS
                // console.log(mod);
                // const Component = mod.default || mod;
                const content = fs.readFileSync(full, 'utf-8');
                result.push({ dirPath: full, content });
            }
        }
    })(pagesDir);

    // 4️⃣ 返回 JS 字符串，业务代码直接 import
    return `export default ${JSON.stringify(result, null, 2)};`;
};
