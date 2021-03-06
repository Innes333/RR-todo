const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist/js/'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}, {
				test: /\.sass$/,
				loader: 'style-loader!css-loader!sass-loader',
			}, {
				test: /\.(png|jpg|woff|ttf|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		],
	},
	plugins: [
		HtmlWebpackPluginConfig,
	],
	devServer: {
		contentBase: './webpack-static',
		port: 6006,
		headers: { 'Access-Control-Allow-Origin': '*' },
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/' },
			],
		},
	},
}
