const pathHelpers = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Expect `__dirname` to be `/config/target/`.
const ROOT_PATH = __dirname;
const TARGET_PATH = pathHelpers.join(ROOT_PATH, "./target/");
const SRC_PATH = pathHelpers.join(ROOT_PATH, "./src/");

const ENTRY_FILENAME = "index.js";
const OUTPUT_FILENAME = "index.js";

const config = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      defaultSizes: 'stat',
      generateStatsFile: true
    })
  ],
  optimization: {
    usedExports: true
  },
  // mode: "production",
  entry: pathHelpers.resolve(SRC_PATH, ENTRY_FILENAME),
  output: {
    path: TARGET_PATH,
    filename: OUTPUT_FILENAME
  }
};

module.exports = config;
