module.exports = {
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-react']
                  }
              }
          },
          {
              test: /\.(jpe?g|gif|png|svg)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
      ]
  }
}