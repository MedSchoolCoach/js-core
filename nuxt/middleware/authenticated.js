const locationKey = 'auth-post-login-url'

export default async function authenticated (ctx, inject) {
  checkAuth(ctx, inject)
}

async function checkAuth (ctx, inject) {
  if (ctx.$authClient.loading) {
    setTimeout(function () {
      checkAuth()
    }, 10)
  }

  await onAuthReady(ctx, inject)
}

async function onAuthReady (ctx, inject) {
  if (!ctx.$authClient.isAuthenticated) {
    localStorage.setItem(locationKey, encodeURI(window.location.pathname + window.location.search))
    return ctx.$authClient.login()
  }

  maybeRedirect(ctx)
  // ctx.$user = await ctx.$userClient.get()
  // console.log(ctx.$user)
  // inject('user', ctx.$user)
}

function maybeRedirect (ctx) {
  const redirect = decodeURI(localStorage.getItem(locationKey))
  if (redirect && 'null' !== redirect && redirect !== window.location.pathname + window.location.search
  ) {
    localStorage.removeItem(locationKey)
    ctx.app.router.push(redirect)
  }
}