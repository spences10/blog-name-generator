import React, { useState } from 'react'
import { Box } from 'theme-ui'
import { getBlogName } from '../script'

export default function Home() {
  const [blogName, blogNameSet] = useState(`Your Blog Name here!!`)
  return (
    <Box as="div">
      <Box as="h1" variant="styles.h1">
        Blog Name Generator
      </Box>
      <Box as="h2" variant="styles.h2">
        {blogName}
      </Box>
      <Box
        as="button"
        variant="styles.button"
        onClick={() => {
          blogNameSet(getBlogName())
        }}
      >
        Get Name
      </Box>
    </Box>
  )
}
