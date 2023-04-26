/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextChildren } from '@/interfaces/next-interface'

const Hoc = ({ children }: NextChildren) => {
  const router = useRouter()

  console.log('router', router.pathname)

  useEffect(() => {
    if (router.pathname != '/main-chat') {
      router.push('/main-chat')
    }
  }, [])

  return <>{children}</>
}

export default Hoc
