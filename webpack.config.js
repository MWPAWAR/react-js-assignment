const Config = {
	entry: './index.js',
	output: {
		path: '/',
		filename: 'main.js'
	},
	
	devServer: {
		inline: true,
		port: 8080
	},
	
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			
			query: {
				presets: ['es2015', 'react']
			}
		}
		]
	}
}

module.exports = Config;