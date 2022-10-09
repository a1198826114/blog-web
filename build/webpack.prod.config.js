const commonConfig = require("./webpack.common.config");
// webpack-merge 将公共的配置 和 开发的配置合并结合
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const {CssMinimizerPlugin} = require("css-minimizer-webpack-plugin"); //将打包后的css文件进行压缩，减小打包体积
const TerserPlugin = require("terser-webpack-plugin"); ////将打包后的js文件进行压缩，减小打包体积,本来生产模式下是自动对js文件进行压缩的，但是由于我们重新配置了optimization，所以要把这个加上
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //不用style-loader的原因就是将css样式文件从打包后的文件中分离出来，减小打包后的体积
const prodConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx", // Remove this if you're not using JSX
          target: "es2015", // Syntax to compile to (see options below for possible values)
        },
      },
      {
        test: /(\.css|\.less)$/, //匹配所有的 css 文件
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // postcss-loader是用来解决不同浏览器css3的兼容性的(比如添加transform这个属性之前针对不同浏览器加不同的前缀)
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset", //会根据文件大小来选择使用哪种类型，当文件小于 8 KB（默认） 的时候会使用 asset/inline，否则会使用 asset/resource
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: "[name][hash:8][ext]",
        },
        parser: {
          //重新进行自定义
          dataUrlCondition: {
            maxSize: 50 * 1024, //超过50kb不转 base64
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 超过100kb不转 base64
          },
        },
      },
    ],
  },
  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new MiniCssExtractPlugin({
  //     // 添加插件
  //     filename: "[name].[contenthash:8].css", //因为样式抽离了出来，所以单独使用contenthash
  //   }),
  // ],
  // optimization: {
  //   minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  //   minimize: true, //设置这个后再开发环境下也会对打包的css文件进行压缩
  //   splitChunks: {
  //     cacheGroups: {
  //       // 配置提取模块的方案
  //       default: false,
  //       common: {
  //         name: "chunk-common",
  //         chunks: "all",
  //         minChunks: 2,
  //         maxInitialRequests: 5,
  //         minSize: 0,
  //         priority: 1,
  //         enforce: true,
  //         reuseExistingChunk: true,
  //       },
  //       vendors: {
  //         name: "chunk-vendors",
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: "all",
  //         priority: 2,
  //         enforce: true,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
};
module.exports = merge(commonConfig, prodConfig);
