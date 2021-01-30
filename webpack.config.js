// Webpack uses this to work with directories
const path = require('path');

const internalIp = require('internal-ip');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: ['./src/javascript/index.js','webpack-plugin-serve/client'],

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: { minimize: true }
                  }
                ]
              },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,

                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: "css-loader"
                    }
                ]

            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                       {
                         // Using file-loader for these files
                         loader: "file-loader",

                         // In options we can set different things like format
                         // and directory to save
                         options: {
                           outputPath: 'images'
                         }
                       }
                     ]
              }
        ]
    },

    plugins: [
        ///...
        new Serve({
          host: internalIp.v4()
        })
      ],

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: 'development',
    watch: true
};