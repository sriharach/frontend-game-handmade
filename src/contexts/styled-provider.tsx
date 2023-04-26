import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NextChildren } from '@/interfaces/next-interface'
import { theme } from '@/scss/styled-component-theme'

const StyledProvider = ({ children }: NextChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledProvider
