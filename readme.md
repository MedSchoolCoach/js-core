### Installation
1. Authenticate your local NPM with github
https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
2. Add `.npmrc` to your local project containing
`@medschoolcoach:registry=https://npm.pkg.github.com`
   
3. Add dependency to package.json `"@medschoolcoach/js-core": "^1.0.0"`
4. `npm install`



### Methods
```
userClient.get() // Get user
userClient.update(user) // Update user
userClient.getPurchases() // Get paginated purchases. getPurchases(3) - page 3
```

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

### ES6

```
import UserClient from '@medschoolcoach/user-js-sdk'

const client = UserClient.create({authToken: '...', baseUrl: 'http://localhost:8000'})

const user = await client.get()
```

### JS

```
<script src="./node_modules/@medschoolcoach/user-js-sdk/dist/index.js"></script>

const client = userClient.create({authToken: '...', baseUrl: 'http://localhost:8000'})

client.get().then((user) => {
    this.user = user
})
```
