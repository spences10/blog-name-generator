import React from 'react'
import { Box } from 'theme-ui'

export const Layout = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        fontFamily: 'Prociono, sans-serif',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  )
}
