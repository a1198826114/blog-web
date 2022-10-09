const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js", //我的理解是对于单入口文件而言，这里写chunkhash和hash没区别，但是多入口就得写chunkhash
  },
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
          "style-loader",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".json"], //配置这个之后引入文件就可以不写后缀了
    modules: [path.resolve(__dirname, "src"), "node_modules"], //webpack 优先 src 目录下查找需要解析的文件，会大大节省查找时间
  },
};
