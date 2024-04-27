const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo List",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
