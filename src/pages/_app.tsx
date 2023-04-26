import React from 'react'
import '@/scss/globals.scss'
import { type AppProps } from 'next/app'
import ThemeAntdProvider from '@/contexts/theme-antd-provider'
import StyledProvider from '@/contexts/styled-provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeAntdProvider>
      <StyledProvider>
        <Component {...pageProps} />
      </StyledProvider>
    </ThemeAntdProvider>
  )
}
