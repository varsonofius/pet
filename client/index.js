import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { HashRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import config from './auth_config.json'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

import ScrollToTop from './components/ScrollToTop'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      audience={config.audience}
    >
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
