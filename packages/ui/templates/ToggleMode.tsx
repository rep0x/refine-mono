import React from 'react'

import { IconButton } from '@mui/material'

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded'

import { ThemeContext } from '../ThemeProvider'

export const ToggleMode = () => {
  const { dark, toggleMode } = React.useContext(ThemeContext)

  return (
    <IconButton onClick={toggleMode}>
      {dark ? <WbSunnyRoundedIcon /> : <NightsStayRoundedIcon />}
    </IconButton>
  )
}
