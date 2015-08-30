var path = require("path");
var webpack = require("webpack");
var vue = require("vue-loader");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		script: './src/chat'
	},
	output: {
		path: path.resolve("./build"),
		filename: "[name].js",
		publicPath: "/build"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "babel", exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css!autoprefixer'},
			{ test: /\.less/, loader: 'style!css!autoprefixer!less'},
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
			{ test: /\.(html|tpl)$/, loader: "html-loader" }
		]
	},
	resolve: {
		extensions: ["", ".js"],
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
		}
	},
	devtool: "#source-map"
};
