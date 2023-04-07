import { ThemeOptions } from '@mui/material'
import { Inter } from 'next/font/google'

export const inter = Inter({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const bluescale = {
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

export const greyscale = {
  900: '#101010',
  800: '#181818',
  700: '#464646',
  600: '#5E5E5E',
  500: '#747474',
  400: '#A3A3A3',
  300: '#BABABA',
  200: '#D1D1D1',
  100: '#E8E8E8',
  50: '#F3F3F3',
}

const baseHeadline = {
  fontWeight: 900,
  lineHeight: 1.1,
}

export const base: ThemeOptions = {
  palette: {
    primary: {
      main: '#00E6E6',
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
    fontFamily: inter.style.fontFamily,
    h1: { ...baseHeadline, fontSize: 64 },
    h2: baseHeadline,
    h3: baseHeadline,
    h4: baseHeadline,
    h5: baseHeadline,
    h6: baseHeadline,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
}
