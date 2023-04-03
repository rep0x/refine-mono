import { type AppType } from 'next/app'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import { light } from '../brands'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
