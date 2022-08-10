const CracoLessPlugin = require("craco-less")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require("path")

module.exports = {
    webpack: {
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            "@": path.resolve(__dirname, "src")
        },
        // plugins: [
        //     new BundleAnalyzerPlugin({
        //         analyzerMode: 'server',
        //         analyzerHost: '127.0.0.1',
        //         analyzerPort: 8888,
        //         openAnalyzer: true, // 构建完打开浏览器
        //         reportFilename: path.resolve(__dirname, `analyzer/index.html`),
        //     }),
        // ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#1492FF" },
                        javascriptEnabled: true
                    }
                }
            }
        },
    ],
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: true
                }
            ]
        ]
    }
}
