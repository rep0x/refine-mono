import React from 'react'

import { Box, Typography } from '@mui/material'

export const ScrollDown = (): JSX.Element => (
  <Box
    alignItems="center"
    display="flex"
    flexDirection="column"
    position="fixed"
    sx={{
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: 0.5,
      transition: 'opacity 200ms ease-in-out',
      '&:hover': {
        opacity: 1,
      },
    }}
  >
    <Box
      sx={{
        width: 10,
        height: 18,
        borderRadius: 10,
        bgcolor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.5)',
        p: '3px',
        pt: '10px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '50%',
          height: 3,
          width: 3,
        }}
      />
    </Box>
    <Typography
      fontSize={8}
      fontWeight={900}
      mt={1}
      sx={{ opacity: 0.5 }}
      textAlign="center"
      whiteSpace="nowrap"
    >
      SCROLL DOWN
    </Typography>
  </Box>
)
