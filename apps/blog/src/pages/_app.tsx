import { type AppType } from 'next/app'
import { AppProps } from 'next/app'

import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { EmotionCache } from '@emotion/react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { light, dark } from 'ui'

import { api } from '~/utils/api'
import createEmotionCache from '~/utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <ClerkProvider {...pageProps}>
      <Analytics />
      <ThemeProvider theme={dark}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
