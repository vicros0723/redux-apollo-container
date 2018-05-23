const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const nodeExternals = require("webpack-node-externals");

const compileTypescript = {
  test: /\.ts$/,
  use: [
    {
      loader: "awesome-typescript-loader",
      query: {
        configFileName: "./tsconfig.json"
      }
    }
  ]
};

module.exports = {
  mode: "none",
  entry: "./server/index.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "index.js"
  },
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      compileTypescript
    ]
  }
};
