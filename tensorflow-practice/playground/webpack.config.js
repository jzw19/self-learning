module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ],
  }
};