const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [{ test: /\.(ts|js)?$/, loader: 'babel-loader', exclude: /node_modules/ }],
    },
};
