import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from '@sentry/react'
import { useLocation, useNavigationType, createRoutesFromChildren, matchRoutes } from 'react-router'
import { Auth0Provider } from '@auth0/auth0-react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing(
    {
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
      tracingOrigins: ['localhost', 'my-site.com', /^\//],
    },
  )],
  tracesSampleRate: 1.0,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
