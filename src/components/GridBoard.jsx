import React, { useState } from "react";
// const initial = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
const GridBoard = ({ onSquareChange,board }) => {
// let gameBoard=initial;
// for (let turn of turns){
// const {square,player}=turn
// const {row,col}=square
// gameBoard[row][col]=player

// }

  // const [gameBoard, setGameBoard] = useState(initial);
  // function handleBoardChange(rowInd, colInd) {
  //   setGameBoard((prev) => {
  //     const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowInd][colInd] =  activePlayer==='X'?'X':'O';
  //     return updatedBoard;
  //   });
  //   onSquareChange();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button disabled={symbol} onClick={()=>onSquareChange(rowIndex,colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GridBoard;
