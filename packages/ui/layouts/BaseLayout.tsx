import React from 'react'

import { Box, BoxProps, GlobalStyles, useTheme } from '@mui/material'

export const BaseLayout = (props: BoxProps) => {
  const { children, sx, className } = props
  const theme = useTheme()

  return (
    <Box {...props} sx={{ ...styles, ...sx }} className={`page ${className}`}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: `${theme.palette.background.paper} !important`,
          },
        }}
      />
      {children}
    </Box>
  )
}

const styles = {
  pt: '80px',
}
