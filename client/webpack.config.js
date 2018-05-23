const path = require("path");
const { NoEmitOnErrorsPlugin } = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

const compileTypescript = {
  test: /\.ts*/,
  use: [
    {
      loader: "awesome-typescript-loader",
      query: {
        configFileName: "./tsconfig.json"
      }
    }
  ]
};

const minifyCss = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          minimize: true,
          importLoaders: 1
        }
      }
    ]
  })
};

module.exports = {
  mode: "none",
  entry: "./client/index.tsx",
  plugins: [
    // Don"t proceed in generating code if there are errors
    new NoEmitOnErrorsPlugin(),
    // Show a nice progress bar on the console.
    new ProgressBarPlugin(),
    // Generate the HTML
    new HtmlPlugin({
      title: "Menu",
      template: "client/index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "../dist/public"),
    filename: "[name].[hash].js"
  },
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      compileTypescript,
      minifyCss
    ]
  }
};
