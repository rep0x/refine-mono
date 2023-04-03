import React from 'react'

import { Box, Typography } from '@mui/material'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded'

export const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <DiamondRoundedIcon sx={{ display: 'flex', mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
    </Box>
  )
}
