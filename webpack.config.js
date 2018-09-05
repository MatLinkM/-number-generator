const path = require('path');
const NumberGeneration = require('./mock');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    before: (app) => {
      app.get('/numbers', (req, res) => {
        const listNumbers = NumberGeneration.listNumbers({ perPage: 100, page: 1, totalPages: 100 });
        res.json( listNumbers );
      });
    }
  }
};
