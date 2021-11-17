module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/',
    library: 'userClient',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}
