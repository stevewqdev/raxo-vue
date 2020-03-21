// const glob = require("glob-all");
// const path = require("path");
// const PurgecssPlugin = require("purgecss-webpack-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const PrerenderSpaPlugin = require("prerender-spa-plugin");
const SitemapWebpackPlugin = require("sitemap-webpack-plugin").default;

const paths = [
  "/",
  "/work",
  "/work2",
  "/contact",
  "/team",
  "/about",
  "/creative-work/allocate",
  "/creative-work/awake",
  "/creative-work/smart-cities",
  "/creative-work/humanifed-branding-web-design-app-development",
  "/creative-work/ultra-music-animation-design-web-development",
  "/creative-work/bbc-entertainment-london-calling-design",
  "/creative-work/showtime",
  "/creative-work/base-develops-and-manages",
  "/creative-work/coloredge-is-a-unique-media-company",
  "/creative-work/city-cancer-challenge",
  "/creative-work/rock-summer-is-an-initiative-started",
  "/creative-work/pluto-tv-is-an-Internet-based-television",
  "/creative-work/oracle-cloud-hero-marketing-design-web-development",
  "/creative-work/hugo-boss-design-animation",
  "/creative-work/first-key-homes-strategy-design-web-development",
  "/creative-work/the-department-design-web-development",
  "/creative-work/engine-shop-branding-design-web-development",
  "/creative-work/bbc-entertainment-design-animation-tv",
  "/creative-work/yankees-creative-design",
  "/creative-work/sermo-branding-design-web-development",
  "/creative-work/bbc-entertainment-mina-jack-animation-design-tv",
  "/creative-work/bbc-entertainment-HD-design-animation-tv",
  "/creative-work/bbc-entertainment-cbeebies-creative",
  "/creative-work/le-cordon-bleu-creative-design-web-development",
  "/creative-work/onboard-informatics-design-web-development",
  "/creative-work/the-long-way-back-entertainment-design-animation",
  "/creative-work/univision-election-design-animation-tv",
  "/creative-work/sambazon-design-animation",
  "/creative-work/steelbridge-labs-incubator-branding-web-design",
  "/creative-work/simply-ira-iralogix-branding-design-web",
  "/creative-work/global-press-design",
  "/creative-work/indago-design-animation",
  "/creative-work/investigation-13-entertainment-design-animation",
  "/creative-work/fusion-beauty-creative-packaging",
  "/creative-work/quantgene-is-a-cell-free-platform",
  "/creative-work/lufthansa-creative-design-web-development",
  "/creative-work/repair-the-world",
  "/creative-work/clearvuze"
];

// module.exports = {
//   productionSourceMap: false,
//   chainWebpack: config => {
//     // remove the prefetch plugin
//     config.plugins.delete("prefetch");
//   },
//   configureWebpack: {
// Merged into the final Webpack config
//     plugins: [
// new PurgecssPlugin({
//   paths: glob.sync([
//     path.join(__dirname, "./../src/index.html"),
//     path.join(__dirname, "./../**/*.vue"),
//     path.join(__dirname, "./../src/**/*.js")
//   ])
// }),
//       new SitemapWebpackPlugin("https://raxo.tv", paths, {
//         fileName: "map.xml",
//         lastMod: true,
//         changeFreq: "monthly",
//         priority: "0.4"
//       }),
//       new OptimizeCssAssetsPlugin({
//         assetNameRegExp: /\.optimize\.css$/g,
//         cssProcessor: require("cssnano"),
//         cssProcessorPluginOptions: {
//           preset: ["default", { discardComments: { removeAll: true } }]
//         },
//         canPrint: true
//       })
// new PrerenderSpaPlugin(
//   // Absolute path to compiled SPA
//   path.join(__dirname, "."),
//   // List of routes to prerender
//   [
//     "/",
//     "/#/creative-work/bbc-entertainment-london-calling-design",
//     "#/creative-work/humanifed-branding-web-design-app-development",
//     "#/creative-work/showtime",
//     "#/creative-work/coloredge-is-a-unique-media-company"
//   ]
// )
//     ]
//   },
//   publicPath: "./"
// };

// Add this line:
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  chainWebpack(config) {
    config.plugins.delete("prefetch");

    // and this line
    config.plugin("CompressionPlugin").use(CompressionPlugin);
  }
};
