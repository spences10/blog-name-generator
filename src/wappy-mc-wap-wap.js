import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{element}</>
    </ThemeProvider>
  )
}
