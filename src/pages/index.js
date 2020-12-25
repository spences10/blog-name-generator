import React, { useState } from 'react'
import { Box } from 'theme-ui'
import { getBlogName } from '../script'

export default function Home() {
  const [blogName, blogNameSet] = useState(`Your Blog Name here!!`)
  return (
    <Box as="div">
      <h1>Blog Name Generator</h1>
      <h2>{blogName}</h2>
      <button
        onClick={() => {
          blogNameSet(getBlogName())
        }}
      >
        Get Name
      </button>
    </Box>
  )
}
