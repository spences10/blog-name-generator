import axios from 'axios'
import React, { useState } from 'react'
import { Box, Grid } from 'theme-ui'

export default function Home() {
  const [blogNameObj, blogNameObjSet] = useState({
    name: `Your Blog Name here!!`,
  })
  const getBlogName = async () => {
    await axios
      .get(`https://random-blog-name.vercel.app/api`)
      .then(res => {
        blogNameObjSet(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <Grid
      gap={6}
      columns={[1, '1fr']}
      sx={{ justifyItems: 'center' }}
    >
      <Box as="h1" variant="styles.h1">
        Blog Name Generator
      </Box>
      <Box as="h2" variant="styles.h2">
        {blogNameObj.name}
      </Box>
      <Box
        as="button"
        variant="styles.button"
        onClick={() => {
          blogNameObjSet(getBlogName())
        }}
      >
        Get Name
      </Box>
    </Grid>
  )
}
