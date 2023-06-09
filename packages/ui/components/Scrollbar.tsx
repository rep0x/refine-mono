import React from 'react'

import { GlobalStyles, useTheme } from '@mui/material'

export const Scrollbar = () => {
  const theme = useTheme()

  const globalStyles = {
    html: {
      scrollBehaviour: 'smooth',
    },

    /* width */
    '::-webkit-scrollbar': {
      width: 6,
      zIndex: 1000000,
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      background: theme.palette.background.paper,
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      borderRadius: 2,
      background: theme.palette.text.disabled,
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.text.primary,
    },
  }

  return <GlobalStyles styles={globalStyles} />
}
