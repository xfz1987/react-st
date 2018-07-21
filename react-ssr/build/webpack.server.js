const path = require('path')

module.exports = {
	target: 'node',
	entry: {
		app: path.join(__dirname, '../src/webapp/server-entry.js')
	},
	output: {
    	filename: path.join(__dirname, '../dist/assets/server-entry.js'),
    	libraryTarget: 'commonjs2'
  	},
}