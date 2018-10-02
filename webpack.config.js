const path = require('path');
// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');


module.exports = {
  entry: {
    main: './index.js'
  },
  // watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     'css-loader',
      //   ]
      // }
    ]
  },
  // plugins: [
  //   new SVGSpritemapPlugin({
  //     src: './svg/**/*.svg',
  //     filename: 'images/spriteSVG.svg',
  //     prefix: 'icon-'
  //   })
  // ]
};
