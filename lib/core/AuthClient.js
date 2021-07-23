const auth0 = require('@auth0/auth0-spa-js')

const scope = 'openid profile email'

class AuthClient {
  _auth0 = null
  loading = true
  isAuthenticated = false
  isAdmin = false
  user = {}
  _domain;
  _clientId;
  _audience;
  _redirectUri;
  _logoutUrl;

  constructor(config) {
    this._domain = config.domain
    this._clientId = config.clientId
    this._audience = config.audience
    this._redirectUri = config.appUrl
    this._logoutUrl = config.logoutUrl ?? `https://www.medschoolcoach.com/`
  }

  async init() {
    return auth0.default({
      domain: this._domain,
      client_id: this._clientId,
      audience: this._audience,
      redirect_uri: this._redirectUri,
      scope: scope
    }).then(async r => {
      this._auth0 = r
      try {
        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          await this.handleRedirectCallback()
          // Strip url params
          window.history.replaceState({}, document.title, '/')
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.isAuthenticated = await this._auth0.isAuthenticated()
        this.loadUser()
        this.loading = false
      }
    })
  }

  loadUser() {
    if (!this.isAuthenticated) return

    this._auth0.getUser().then(r => {
      this.user = r
      this.isAdmin = this.checkAdmin()
    })
  }

  checkAdmin() {
    if (!this.user['https://medschoolcoach.com/roles']) {
      return false
    }

    return this.user['https://medschoolcoach.com/roles'].includes('admin')
  }

  async getToken() {
    return await this._auth0.getTokenSilently()
  }

  async login() {
    return this._auth0.loginWithRedirect()
  }

  logout() {
    this._auth0.logout({
      returnTo: this._logoutUrl
    })
  }

  signup(email = false) {
    const options = {
      action: 'signup'
    }

    if (email) {
      options.login_hint = email
    }

    this._auth0.loginWithRedirect(options)
  }

  /** Handles the callback when logging in using a redirect */
  async handleRedirectCallback() {
    this.loading = true
    try {
      await this._auth0.handleRedirectCallback()
      this.user = await this._auth0.getUser()
      this.isAuthenticated = true
    } catch (e) {
      this.error = e
    } finally {
      this.loading = false
    }
  }
}

module.exports = AuthClient;