import React, { useState } from 'react'
import Board from './MainGame.tsx/Board'
import Add from './MainGame.tsx/Add'
import Random from './MainGame.tsx/Random'

interface GameModeI {
  name: string
}

export type GameModeT = 'add' | 'board' | 'random'

const GameMode = ({ name }: GameModeI) => {
  const [mode, setMode] = useState<GameModeT>('board')

  return (
    <>
      {mode === 'board' ? (
        <Board name={name} setMode={setMode} />
      ) : mode === 'add' ? (
        <Add setMode={setMode} />
      ) : (
        <Random name={name} setMode={setMode} />
      )}
    </>
  )
}

export default GameMode
