const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: { app: path.resolve(__dirname , "src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, "src")],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      '@app-mui': path.resolve(__dirname, 'src/mui'),
    },
  },
  optimization: {
    splitChunks: { chunks: 'all'},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/graphql/**': {
        target: 'http://localhost:9000',
        secure: false,
        changeOrigin: true
      }
    },
  },
  target: 'web',
}