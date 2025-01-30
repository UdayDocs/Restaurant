const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "/Restaurant/",
  },
    devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true, // Enables Hot Module Replacement
    open: true, // Automatically opens the browser
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: 'development'
};
