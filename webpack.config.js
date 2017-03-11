var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "view"),
  target: "electron",
  entry: {
    startupRender: "./startup-render.js",
    revealRender: "./reveal-render.js"
  },
  output: {
    path: path.join(__dirname, "view"),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      }
    }]
  },
  node: {
    __dirname: true,
    console: true,
    __filename: true
  }
}
