import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path, { resolve } from 'path';
import webpack from 'webpack';
import { TailwindCSSWebpackPlugin } from 'tailwindcss-webpack-plugin';

const outputPath = resolve(__dirname, 'build');


module.exports = {
  entry: [
    // './src/styles/main.scss',
    './src/index.tsx',
    // 'react-hot-loader/patch',
    './src',
    // './src/webpackStatsuBar',
  ].filter(Boolean),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: '/',
    clean: true,
  },
  target: 'web',
  devServer: {
    // Enable compression
    compress: true,
    // Enable hot reloading
    hot: true,
    // For fall back to index.html (required for SPA)
    historyApiFallback: true,
    liveReload: false,
    host: '0.0.0.0',
    port: 5000,
    open: 'http://localhost:5000/',
    static: [outputPath],
    client: {
      progress: true,
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      console.log('Listening...\n\n\n\n\n-----------');
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.(ts|js)x?$/i,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader',
        // },
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|svg|ico|webp)$/,
          exclude: /node_modules/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 3 * 1024,
            },
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        },
      ],
  },
  plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
          favicon: './public/favicon.ico',
          publicURL: 'http://localhost:4000',
      }),
      new TailwindCSSWebpackPlugin()
  ],
};

// export default configuration;
