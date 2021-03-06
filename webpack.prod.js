const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	entry: {
		registration: ['./frontend-src/registration/registration-main.jsx'],
		survey: ['./frontend-src/survey/survey-main.jsx'],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
});