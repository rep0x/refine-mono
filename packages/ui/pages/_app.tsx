import { type AppType } from 'next/app'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'

import createEmotionCache from '../utils/createEmotionCache'
import { ThemeProvider } from '../ThemeProvider'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
