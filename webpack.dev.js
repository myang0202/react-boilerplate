const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		registration: ['./frontend-src/registration/registration-main.jsx', hotMiddlewareScript],
		survey: ['./frontend-src/survey/survey-main.jsx', hotMiddlewareScript],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	
});