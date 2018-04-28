// styleguide/ThemeWrapper.js

import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './../src/styles/theme.style'
import './../src/styles/globals.style'

export default class ThemeWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
