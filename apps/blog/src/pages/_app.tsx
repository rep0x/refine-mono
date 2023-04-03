import { type AppType } from 'next/app'
import { AppProps } from 'next/app'

import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { EmotionCache } from '@emotion/react'

import { api } from '~/utils/api'
import createEmotionCache from '~/utils/createEmotionCache'
import { ThemeProvider } from 'ui'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <ClerkProvider {...pageProps}>
      <Analytics />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
