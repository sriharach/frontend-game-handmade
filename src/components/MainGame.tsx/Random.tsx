import React, { useState } from 'react'
import { Button, Divider, Spin, Typography, Space } from 'antd'
import { randomData } from '@/service/api-game'
import { GameModeT } from '../GameMode'

interface RandomI {
  name: string
  setMode: (mode: GameModeT) => void
}

const Random = ({ name, setMode }: RandomI) => {
  const [loadPage, setLoadPage] = useState(true)
  const [randomResult, setRandomResult] = useState<string | undefined>(
    undefined,
  )

  const rander = async () => {
    const response = await randomData()
    if (response.err) {
      setRandomResult('หมด')
    } else {
      setRandomResult(response.word)
    }
    setLoadPage(false)
  }

  return (
    <>
      <Typography.Title level={3}>{name}</Typography.Title>
      <Divider />
      <div style={{ textAlign: 'center' }}>
        {loadPage ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : (
          <Typography.Title level={1} style={{ fontSize: 84 }}>
            {randomResult}
          </Typography.Title>
        )}
      </div>
      <Divider />
      <Space>
        <Button onClick={() => setMode('board')}>กลับ</Button>
        <Button disabled={!!randomResult} onClick={rander} type='primary'>
          สุ่ม
        </Button>
      </Space>
    </>
  )
}

export default Random
