import { ThemeOptions } from '@mui/material'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const greyscale = {
  900: '#070E1D',
  800: '#131F37',
  700: '#293858',
  600: '#677695',
  500: '#909FBE',
  400: '#B0BFD9',
  300: '#D8E1F4',
  200: '#E8EEFB',
  100: '#F2F5FB',
  50: '#F6F8FC',
}

export const base: ThemeOptions = {
  palette: {
    primary: {
      main: '#00E0CA',
    },
    success: {
      main: '#1ADA67',
    },
    error: {
      main: '#F67367',
    },
    warning: {
      main: '#FFCA62',
    },
    info: {
      main: '#108CFF',
    },
    grey: {
      ...greyscale,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: 64,
    },
    button: {
      textTransform: 'none',
    },
  },
}
