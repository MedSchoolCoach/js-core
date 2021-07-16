### Nuxt
#### Config

```
  modules: [
    ...
    '@medschoolcoach/user-js-client/nuxt'
    ...
  ],

  ...

  userApiSdk: {
    baseUrl: 'http://localhost:8000'
  }

  ...
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
