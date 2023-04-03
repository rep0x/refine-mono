import React from 'react'

import { Box, BoxProps } from '@mui/material'

export const BaseLayout = (props: BoxProps) => {
  const { children, sx } = props

  return (
    <Box {...props} sx={{ ...styles, ...sx }}>
      {children}
    </Box>
  )
}

const styles = {
  pt: '80px',
}
