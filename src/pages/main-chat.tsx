import React, { useState } from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import EnterNameGame, { type FormGame } from '@/components/EnterNameGame'
import GameMode from '@/components/GameMode'

const MainChat = () => {
  const [enterName, setEnterName] = useState<FormGame | undefined>(undefined)

  return (
    <div className='max-w-screen-md m-auto px-4'>
      <OuterBox>
        <CardCustom>
          {typeof enterName === 'undefined' ? (
            <EnterNameGame setName={setEnterName} />
          ) : (
            <GameMode name={enterName.game_name} />
          )}
        </CardCustom>
      </OuterBox>
    </div>
  )
}

export default MainChat

const OuterBox = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`

const CardCustom = styled(Card)`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`
