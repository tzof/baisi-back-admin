const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve("src"),
        "components": resolve("src/components"),
        "views": resolve("src/views"),
        "store": resolve("src/store"),
        "assets": resolve("src/assets"),
        "utils": resolve("src/utils"),
        "router": resolve("src/router"),
        "api": resolve("src/api"),
        "network": resolve("src/network"),
        "plugins": resolve("src/plugins")
      }
    }
  },
  // 配置代理
  devServer: {
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://tzof.net:212',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      },
    },
  },
}