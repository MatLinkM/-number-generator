const path = require('path');

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
    before: function(app) {
      app.get('/numbers', function(req, res) {
        res.json(
          {
            "meta": {
              "page": 1,
              "perPage": 3,
              "totalPages": 334
            },
            "data": [
              {
                "number": 555000000,
                "cost": 1
              },
              {
                "number": 555000001,
                "cost": 1.01
              },
              {
                "number": 555000002,
                "cost": 1.02
              }
            ]
          }
        );
      });
    }
  }
};
