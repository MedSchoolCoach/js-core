const locationKey = 'auth-post-login-url'

export default async function authenticated(ctx) {
  // if (!ctx.$authClient.isAuthenticated) {
  //   localStorage.setItem(locationKey, encodeURI(window.location.pathname + window.location.search))
  //   return ctx.$authClient.login()
  // } else {
  //   if (
  //     localStorage.getItem(locationKey) !==
  //     window.location.pathname + window.location.search
  //   ) {
  //     console.log('redirecting')
  //     ctx.app.router.push(decodeURI(localStorage.getItem(locationKey)))
  //   }
  //
  //   localStorage.removeItem(locationKey)
  // }
}
