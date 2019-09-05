const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  console.log('setting up ' + env + ' environment!!' );
  const isProd = env === 'production';
  const CSSExtract = new ExtractTextPlugin('style.css');
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
       },
       {
         test: /\.s?css$/,
         use: CSSExtract.extract(
           {
             use: [
              {
                loader:'css-loader',
                options: {
                  sourceMap:true
                }
              },
              {
                loader:'sass-loader',
                options: {
                  sourceMap:true
                }
            }
          ]
        })
       }
    ]
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    plugins: [
     CSSExtract,
    ]
  }
};

