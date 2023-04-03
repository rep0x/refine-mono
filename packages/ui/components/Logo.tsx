import React from 'react'

import { Box, Typography } from '@mui/material'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Box
      sx={{
        mr: 2,

        '& a': {
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Link href="/">
        <DiamondRoundedIcon sx={{ display: 'flex', mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 700,
          }}
        >
          Refine Studio
        </Typography>
      </Link>
    </Box>
  )
}
