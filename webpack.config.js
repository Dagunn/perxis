const config = {
  mode: 'production',
  entry: {
    header: './src/js/header.js',
    benefits: './src/js/benefits.js',
    stocks: './src/js/stocks.js',
    map: './src/js/map.js',

  },

  output: {
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config