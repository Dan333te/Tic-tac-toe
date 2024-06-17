import React from 'react'
import ticTacImg from"/game-logo.png"
const PageTitle = () => {
  return (
    <header>
        <img src={ticTacImg} alt="" />
        <h1>Tic-Tac-Toe</h1>
    </header>
  )
}

export default PageTitle