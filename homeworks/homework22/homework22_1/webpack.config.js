const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: isProd,
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            })
        ],
        optimization: {
            minimize: isProd,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin(),
                ...(isProd ? [new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                ['mozjpeg', { quality: 70 }],
                                ['pngquant', { quality: [0.6, 0.8] }]
                            ]
                        }
                    }
                })] : [])
            ],
        },
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            open: true,
            hot: true,
            port: 3000,
        },
        devtool: isProd ? false : 'source-map',
        watch: !isProd,
    };
};