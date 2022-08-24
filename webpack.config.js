const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = (env, options) => {
	const isProduction = options.mode === 'production';
	const config = {
		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? false : 'source-map',
		entry: ['./app/js/index.js', './app/sass/main.sass'],
		output: {
			path: path.join(__dirname, '/dist'),
			filename: 'bundle.js',
		},
		devServer: {
			open: true,
			static: {
				directory: path.join(__dirname, 'app'),
			},
			compress: true,
			port: 9000,
			hot: true,
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
						},
					}
				},
				{
					test: /\.sass$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader', 'group-css-media-queries-loader', 'sass-loader'
					]
				},
				{
					test: /\.(png|svg|jpe?g|gif|ico)$/,
					type: 'asset/resource',
					generator: {
						filename: 'img/[name][ext]'
					}
				},
				{
					test: /\.html$/,
					loader: 'html-loader',
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					type: 'asset/resource',
					generator: {
						filename: 'fonts/[name][ext]'
					}
				}
			],
		},

		optimization: {
			minimizer: [
				"...",
				new ImageMinimizerPlugin({
					minimizer: {
						implementation: ImageMinimizerPlugin.squooshMinify,
						options: {
							encodeOptions: {
								mozjpeg: {
									quality: 85,
								},
								webp: {
									lossless: 1,
								},
								avif: {
									cqLevel: 0,
								},
							},
						},
					},
				}),
			],
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: 'app/index.html',
				inject: 'body'
			}),
			new MiniCssExtractPlugin({
				filename: 'style.css'
			})
		]
	}

	return config;
}
