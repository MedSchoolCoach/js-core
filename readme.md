### Nuxt
#### Config

nuxt.config.js
```
modules: [
    ...
    '@medschoolcoach/user-js-sdk/nuxt'
    ...
],

...

userApiSdk: {
    baseUrl: 'http://localhost:8000'
}

...
```

##### For TS

tsconfig.json
```
"types": [
    ...
    "@medschoolcoach/user-js-sdk"
]
```

#### Using

```js
const token = 'token'

this.$userClient.setToken(token)

const user = await this.$userClient.get()

// or

this.$userClient.get().then((user) => {
    this.user = user
})
```

##### Or

```js
const token = 'token'

const user = await this.$userClient.setToken(token).get()

// or

this.$userClient.setToken(token).get().then((user) => {
    this.user = user
})
```
