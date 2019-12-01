module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
        }
      ]
    }
  };