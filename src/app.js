import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes/Routes'
import theme from './styles/theme.style'

const supportsHistory = 'pushState' in window.history

const App = () => (
  <Router forceRefresh={!supportsHistory} keyLength={12}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Router>
)

export default hot(module)(App)
