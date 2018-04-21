import React from 'react'
import { render } from 'react-dom'

import App from './app'

import './index.style'

const renderApp = NextApp => {
  render(
    <NextApp />,
    document.getElementById('app')
  )
}

renderApp(App)
