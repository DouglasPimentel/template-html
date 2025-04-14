const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  entry: "./src/ts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/assets/js"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
