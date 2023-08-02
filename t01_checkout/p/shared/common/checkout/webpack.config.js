module.exports = {
    entry: ["./src/index.ts"],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(otf|jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      library: 'checkout',
      libraryTarget: 'commonjs2',
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    externals: {
        jquery: 'jQuery'
    },
    // optimization: {
    //   minimize: false
    // },
  };