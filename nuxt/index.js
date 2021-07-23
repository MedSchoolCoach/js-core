const path = require('path')

export default function plugins(_moduleOptions) {
    let options = this.options.msc
    if (!options) {
       options = {}
    }

    this.addPlugin({
        src: path.resolve(__dirname, 'authenticated-services.js'),
        options: Object.assign({}, options)
    })


    this.nuxt.hook('build:templates', ({ templateVars }) => {
        templateVars.middleware.push({
            name: 'authenticated',
            src: path.resolve(__dirname, 'middleware/authenticated.js'),
            fileName: path.join('authenticated.js'),
            options: Object.assign({}, options)
        })

        templateVars.router.middleware.push('authenticated')
    })
}
