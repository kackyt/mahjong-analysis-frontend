import * as Sentry from '@sentry/react'
import {
  ThemeProvider as MUThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { RequireAuth } from './components/atoms/RequireAuth'
import { SignIn } from './pages/signin'
import { OpenAPI } from './apis/analysis'
import { StatisticsIndex } from './pages/statistics'

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })
  OpenAPI.BASE = import.meta.env.VITE_API_BASE

  return (
    <MUThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SentryRoutes>
            <Route path="/" element={<DefaultLayout />}>
              <Route
                index
                element={
                  <RequireAuth redirect="/signin">
                    <StatisticsIndex />
                  </RequireAuth>
                }
              />
              <Route path="signin" element={<SignIn />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </SentryRoutes>
        </BrowserRouter>
      </ThemeProvider>
    </MUThemeProvider>
  )
}

export default App
