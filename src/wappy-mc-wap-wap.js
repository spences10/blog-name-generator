import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Layout } from './components/layout.'
import theme from './theme'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}
