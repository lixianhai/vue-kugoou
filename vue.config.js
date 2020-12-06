'use strict'
const path = require('path')

// -------------后端接口---------------
const target = 'http://m.kugou.com'
// -----------------------------------

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',


  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV !== 'production',
  // lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    // Various Dev Server settings
    // disableHostCheck: true,
    host: '0.0.0.0', // can be overwritten by process.enT
    port: 9527, // can be overwritten by prov.HOScess.env.PORT, if port is in use, a free one will be determined
    open: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api_sys': {
        target: 'http://m.kugou.com',
        changeOrigin: true,
        pathRewrite: {
          "^/api_sys": ''
        }
      }
    }
  },
  // plugins: [
  //   ['import', {
  //     libraryName: 'vant',
  //     libraryDirectory: 'es',
  //     style: true
  //   }, 'vant']
  // ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 41.5,
            // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            unitPrecision: 5,
            // 允许REM单位增长到的十进制数字。
            propWhiteList: [],
            // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList: [],
            // 黑名单
            exclude: /(node_module)/,
            // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            selectorBlackList: [],
            // 要忽略并保留为px的选择器
            ignoreIdentifier: false,
            // （boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            replace: true,
            // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false,
            // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 5
            // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      // to ignore runtime.js
      // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    /* 添加分析工具 */
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          // eslint-disable-next-line global-require
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
  }
}
