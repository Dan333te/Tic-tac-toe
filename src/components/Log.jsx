import React from 'react'

const PlayerLogs = ({turns}) => {
 
  return (
    <ol id='log'>
{
turns&&turns.map(turn=>{
const {square,player}=turn
const {row,col}=square

return <li key={`${row}${col}`}>{player} selected {row},{col}</li>


})}



    </ol>
  )
}

export default PlayerLogs