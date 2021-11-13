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
    '@medschoolcoach/js-core/nuxt'
    ...
],


msc: {
   userApiBase: process.env.USER_API_BASE_URL,
   domain: process.env.AUTH0_DOMAIN,
   audience: process.env.AUTH0_AUDIENCE,
   clientId: process.env.AUTH0_CLIENT_ID,
   appUrl: process.env.VUE_APP_URL
}

```

### Env

`USER_API_BASE_URL`

`AUTH0_DOMAIN`

`AUTH0_AUDIENCE`

`AUTH0_CLIENT_ID`

`VUE_APP_URL`

##### For TS

tsconfig.json

```
"types": [
    ...
    "@medschoolcoach/js-core/nuxt"
]
```

#### Using

TODO revise

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

TODO revise

```
import UserClient from '@medschoolcoach/js-core'

const client = UserClient.create({authToken: '...', baseUrl: 'http://localhost:8000'})

const user = await client.get()
```

### JS

TODO revise

```
<script src="./node_modules/@medschoolcoach/js-core-sdk/dist/index.js"></script>

const client = userClient.create({authToken: '...', ap: 'http://localhost:8000'})

client.get().then((user) => {
    this.user = user
})
```
