const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const devtool = devMode ? "source-map" : undefined;

module.exports = {
    mode,
    devtool,
  devServer: {
    open: true,
    hot: true,
  },
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: { loader: "html-loader" },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.svg?$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/svg/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/image/[name][ext]",
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
