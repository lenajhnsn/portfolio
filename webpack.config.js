const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/, // Apply @svgr/webpack when imported in a JS/TS file
            use: ['@svgr/webpack'],
          },
          {
            type: 'asset', // Uses file-loader for SVGs that are direct image URLs
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,  // Add this rule for images
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name].[hash][ext]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};  