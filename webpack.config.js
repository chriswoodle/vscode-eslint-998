const path = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}) => ({
    context: path.resolve(__dirname, 'src'),
    mode: env.production ? 'production' : 'development',
    entry: {
        app: './main.ts'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash:6].bundle.js",
        publicPath: process.env.BASE_URL,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: require.resolve('vue-loader')
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: { appendTsSuffixTo: [/\.vue$/] }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    require.resolve('style-loader'),
                    // Translates CSS into CommonJS
                    require.resolve('css-loader'),
                    // Compiles Sass to CSS
                    require.resolve('sass-loader'),
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: require.resolve('file-loader'),
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue': '@vue/runtime-dom',
        },
        plugins: [
            PnpWebpackPlugin,
        ],
    },
    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: '../public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new WebpackBar(),
        new VueLoaderPlugin(),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: process.env.BASE_URL,
        index: './index.html',
        hot: true,
        stats: 'minimal',
        quiet: true,
        overlay: {
            warnings: true,
            errors: true
        },
        historyApiFallback: true,
    }
});