import React from 'react'

import { Box, BoxProps } from '@mui/material'

export const Section = (props: BoxProps) => {
  const { children } = props
  return (
    <Box {...props} sx={{ ...props.sx, py: 6 }}>
      {children}
    </Box>
  )
}
