const commonConfig = require("./webpack.common.config");
// webpack-merge 将公共的配置 和 开发的配置合并结合
const { merge } = require("webpack-merge");
const path = require("path");
const devConfig = {
  mode: "development",
  devServer: {
    //开发环境才配置devServer,对静态文件的访问而言，开发环境不用进行打包，只需要进行拷贝就好了
    // static: {
    //   directory: path.resolve(__dirname, "public"), // 静态文件目录
    // },
    compress: true, //是否启动压缩 gzip(意思就是拷贝过去的是压缩后的静态文件，开发环境下页面获取资源更快)
    port: 9000,
    open: true,
    historyApiFallback:true//解决BrowserRouter404的问题（默认只能找到'/'这个路径），找不到对应路由，都返回 index.html，然后通过 js 代码（react-router）来控制显示哪个页面组件
  }
};
module.exports = merge(commonConfig, devConfig);
