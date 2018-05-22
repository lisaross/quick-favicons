const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Quick Favicons'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/favicon.png',
            emitStats: true,
            title: 'Mi Beauti',
            background: "#000",
            inject: true,
            prefix: 'icons/',
            statsFilename: 'iconstats.json',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ]
}
