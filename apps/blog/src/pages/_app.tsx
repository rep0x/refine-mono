import { type AppType } from 'next/app'
import { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { EmotionCache } from '@emotion/react'

import { api } from '~/utils/api'
import createEmotionCache from '~/utils/createEmotionCache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '~/theme'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <ClerkProvider {...pageProps}>
      <Analytics />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
