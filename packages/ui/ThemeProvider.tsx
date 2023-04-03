import React from 'react'

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

import { dark as darkTheme, light as lightTheme } from './brands'

interface IThemeContext {
  dark: boolean
  toggleMode: () => void
}

export const ThemeContext = React.createContext({} as IThemeContext)

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
  const { children } = props

  const [dark, setDark] = React.useState(false)

  React.useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    setDark(prefersDark)
  }, [])

  const toggleMode = () => {
    setDark(!dark)
  }

  const context = {
    dark,
    toggleMode,
  }

  return (
    <ThemeContext.Provider value={context}>
      <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
