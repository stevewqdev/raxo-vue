const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require("path");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch")
  },
  css: {
    sourceMap: true
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './../src/index.html'),
          path.join(__dirname, './../**/*.vue'),
          path.join(__dirname, './../src/**/*.js')
        ])
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  },
  productionSourceMap: false,
  publicPath: "./"
}
