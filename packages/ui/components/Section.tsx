import React from 'react'

import { Box, BoxProps } from '@mui/material'

export const Section = (props: BoxProps) => {
  const { children, className, sx } = props
  return (
    <Box {...props} sx={{ ...sx, py: 6 }} className={`section ${className}`}>
      {children}
    </Box>
  )
}
