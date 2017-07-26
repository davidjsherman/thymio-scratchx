var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
	filename: 'random_wait_extension.js',
	path: path.resolve(__dirname, 'dist')
    }
};
