import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/main-chat')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}
