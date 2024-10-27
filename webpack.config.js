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
        test: /\.(js|jsx)$/,       // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel loader
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
