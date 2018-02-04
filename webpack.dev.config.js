var webpack = require('webpack');
var path = require('path');
// Simply requiring the necessary node modules for running this file

module.exports = {
	entry: ['webpack-dev-server/client?http://localhost:8080/', './src/index.js'],
	// Tells the webpack-dev-server to run on port 8080, and to server up the /src/index.js file
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	// The destination of the code that's being bundled as we edit
	watch: true,
	// Keep running webpack after each update (If you don't run this it will stop after every bundle)
	devtool: 'eval',
	// Allows for clearer error messages while editing our code (No one likes bundled error messages)
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:1337/',
				secure: false
			}
		}
	},
	// If running your own server with api routes, this will proxy any requests starting with '/api' to that URL (ex: http://127.0.0.1:1337/). This is especially useful when deploying by removing the need to constantly change routes when using/not using webpack-dev-server.
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			}
		]
		// Here is the most important part especially when dealing with react applications. Loaders are what converts es6 code into readable browser javascript (Using babel). What it's saying above is any file we use ending with .js or .jsx compile using the presets given (ex: es2015, react, stage-0).
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	// Resolve allows for easy importing files without having to add .js or .jsx to every file. It will default check the extensions if one isn't given.
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
	// Plugins are just what the name implies, they're plugins. Here using hotModuleReplacementPlugin it allows the webpack-dev-server to hot reload whenever a file is saved (Live Reloading). No errors plugin allows for webpack to continuously run even if there are errors in the code, stopping it from crashing every time there's an error.
};
