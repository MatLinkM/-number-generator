const path = require('path');
const PageGeneration = require('./mock');

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
      app.get('/numbers', async (req, res) => {
        const page = await PageGeneration.createPage({ perPage: 3, page: 1 });
        res.json( page );
      });
    }
  }
};
