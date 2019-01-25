const path = require('path');

var config = {
	mode : 'development',
	entry : {
		style : './public/javascripts/styling.js'
	},
	watch : true,
	output : {
		path : path.resolve(__dirname , 'dist'),
		filename : '[name].bundle.js',
	},
	module : {
		rules : [
			{
				test : /\.scss$/,
				use: [
	                {loader : "style-loader"}, // creates style nodes from JS strings
	                {loader : "css-loader"}, // translates CSS into CommonJS
	                {loader : "sass-loader", // compiles Sass to CSS
		            	options: {
		   					 includePaths: ['./node_modules']
		  				}
	  				}
            	],
			},
		]
	},
	node : {
		fs : 'empty'
	}
}

module.exports = config;