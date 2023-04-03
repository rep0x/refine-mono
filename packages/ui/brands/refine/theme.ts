import { createTheme } from '@mui/material/styles'
import { base, greyscale } from './base'

export const light = createTheme({
  ...base,
  palette: {
    mode: 'light',
    secondary: {
      main: greyscale[900],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: greyscale[200],
    },
    text: {
      primary: greyscale[900],
      secondary: greyscale[700],
      disabled: greyscale[500],
    },
  },
})

export const dark = createTheme({
  ...base,
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ffffff',
      contrastText: greyscale[900],
    },
    background: {
      paper: greyscale[900],
      default: greyscale[800],
    },
    text: {
      primary: '#ffffff',
      secondary: greyscale[200],
      disabled: greyscale[400],
    },
  },
})
