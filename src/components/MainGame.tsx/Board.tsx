import { Button, Typography, Divider, Space, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { type PayloadBodyWord } from '@/pages/api/prohibited-word/data'
import { getData, resetData, removeData } from '@/service/api-game'
import { GameModeT } from '../GameMode'

interface BoardI {
  name: string
  setMode: (mode: GameModeT) => void
}

const Board = ({ name, setMode }: BoardI) => {
  const [loadPage, setLoadPage] = useState(true)
  const [data, setData] = useState<Array<PayloadBodyWord>>([])

  useEffect(() => {
    ;(async () => {
      const response: Array<PayloadBodyWord> = await getData()
      setData(response)
      setLoadPage(!loadPage)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleReset = async () => {
    await resetData()
    message.success('รีเซ็ตเกมแล้ว!')
  }

  const handleRemove = async () => {
    await removeData()
    message.success('ลบหมดแล้ว!')
  }
  

  return (
    <>
      <Typography.Title level={2}>{name}</Typography.Title>
      {loadPage ? (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <div style={{ height: 100, overflow: 'auto' }}>
          {data.map((d, index) => (
            <div key={index}>{d.word}</div>
          ))}
        </div>
      )}
      <Divider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Space size='small'>
          <ButtonEven onClick={handleReset} danger>
            รีเซ็ตเกม
          </ButtonEven>
          <ButtonEven onClick={() => setMode('random')} type='default'>สุ่ม</ButtonEven>
          <ButtonEven onClick={handleRemove} danger type='primary'>
            ลบ
          </ButtonEven>
        </Space>

        <div>
          <ButtonEven onClick={() => setMode('add')} type='primary'>
            + เพิ่ม
          </ButtonEven>
        </div>
      </div>
    </>
  )
}

export default Board

const ButtonEven = styled(Button)`
  ${(props) => props.theme.breakpoints.md.down} {
    min-width: 80px;
  }
`
