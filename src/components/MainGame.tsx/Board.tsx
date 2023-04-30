import { Button, Typography, Divider, Space, message } from 'antd'
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
  const [loadButtonReset, setLoadButtonReset] = useState(false)
  const [loadButtonRemove, setLoadButtonRemove] = useState(false)
  const [data, setData] = useState<Array<PayloadBodyWord>>([])

  const randerData = async () => {
    const response: Array<PayloadBodyWord> = await getData()
    setData(response)
  }

  useEffect(() => {
    randerData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleReset = async () => {
    setLoadButtonReset(true)
    await resetData()
    message.success('รีเซ็ตเกมแล้ว!')
    setLoadButtonReset(false)
  }

  const handleRemove = async () => {
    setLoadButtonRemove(true)
    await removeData()
    await randerData()
    message.success('ลบหมดแล้ว!')
    setLoadButtonRemove(false)
  }

  return (
    <>
      <Typography.Title level={2}>{name}</Typography.Title>
      <Divider />
      <ControllBox>
        <Space size='small'>
          <ButtonEven
            onClick={handleReset}
            danger
            loading={loadButtonReset}
            disabled={data.length === 0}
          >
            รีเซ็ตเกม
          </ButtonEven>
          <ButtonEven
            onClick={() => setMode('random')}
            type='default'
            disabled={data.length === 0}
          >
            สุ่ม
          </ButtonEven>
          <ButtonEven
            onClick={handleRemove}
            danger
            type='primary'
            loading={loadButtonRemove}
            disabled={data.length === 0}
          >
            ลบ
          </ButtonEven>
        </Space>

        <div>
          <ButtonEven onClick={() => setMode('add')} type='primary'>
            + เพิ่ม
          </ButtonEven>
        </div>
      </ControllBox>
    </>
  )
}

export default Board

const ButtonEven = styled(Button)`
  ${(props) => props.theme.breakpoints.md.down} {
    min-width: 80px;
  }
`

const ControllBox = styled.div`
  display: grid;
  row-gap: 0.5rem;

  ${(props) => props.theme.breakpoints.md.up} {
    display: flex;
    justify-content: space-between;
  }
`
