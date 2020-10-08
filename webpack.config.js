const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
              },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }
        ),
    ]
}