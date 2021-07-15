import path from 'path'

export default function UserApi(options) {
    this.addPlugin({
        src: path.resolve(__dirname, 'userApiPlugin.js'),
        options: Object.assign({}, this.options.userApiSdk ?? {})
    })
}
