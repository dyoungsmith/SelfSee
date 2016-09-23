const HTMLWebPackPlugin = require('html-webpack-plugin');
const HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.hmtl',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebPackPluginConfig]
};