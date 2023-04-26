import React from 'react'
import { ConfigProvider } from 'antd'
import { NextChildren } from '@/interfaces/next-interface'

const ThemeAntdProvider = ({ children }: NextChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ed8554',
          colorText: '#be375f',
          colorErrorText: '#ee360f',
          fontFamily: 'Kanit',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeAntdProvider
