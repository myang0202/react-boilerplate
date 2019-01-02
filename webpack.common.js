var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		filename: 'frontend-builds/[name]/[name]-bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss'],
		modules: [
			'.',
			'app',
			'components',
			'containers',
			path.resolve(__dirname, 'node_modules'),
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								"@babel/preset-react",
								"@babel/preset-env"
							],
							plugins: [require('@babel/plugin-proposal-class-properties').default]
						}
					},
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'css-loader?url=false',
						options: { sourceMap: true }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				],
			},
			{
				test: /\.(png|jpg|ttf|svg|TTF)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: './frontend-src/registration/index.html',
			filename: 'frontend-builds/registration/registration-index.html',
			chunks: ['registration']
		}),
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: './frontend-src/survey/index.html',
			filename: 'frontend-builds/survey/survey-index.html',
			chunks: ['survey']
		}),
	]
}