const path = require('path')

export default function plugins (_moduleOptions) {
  let options = this.options.msc
  if (!options) {
    options = {}
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'authenticated-services.js'),
    options: Object.assign({}, options)
  })
}
