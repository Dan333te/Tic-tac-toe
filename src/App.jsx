import PageTitle from "./components/PageTitle";
import PlayerMarkup from "./components/PlayerMarkup";
import GridBoard from "./components/GridBoard";
import { useState } from "react";
import PlayerLogs from "./components/Log";
import ActivePlayerHelper from "./helpers/helpers";
import WininingCombinations from "./helpers/Winining-combinations";
import GameOver from "./components/GameOver";
const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({ X: "player 1", O: "player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  let winner = "";
  let activePlayer = ActivePlayerHelper(gameTurns);
  let gameBoard = [...initial.map((arr) => [...arr])];
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WininingCombinations) {
    let firstSymbolSquare = gameBoard[combination[0].row][combination[0].col];
    let secondSymbolSquare = gameBoard[combination[1].row][combination[1].col];
    let thirdSymbolSquare = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSymbolSquare &&
      firstSymbolSquare === secondSymbolSquare &&
      firstSymbolSquare === thirdSymbolSquare
    ) {
      winner = players[firstSymbolSquare];
    }
  }
  const isDraw = gameTurns.length == 9 && !winner;
  function handleSquareChange(rowInd, colInd) {
    setGameTurns((prevTurns) => {
      let currentPlayer = ActivePlayerHelper(prevTurns);

      const updatedTurns = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function handleRematch() {
    setGameTurns([]);
  }
  function handleNamesChanges(symbol,player){
    setPlayers(prevPlayers=>({...prevPlayers,[symbol]:player}))
  }
  return (
    <>
      <PageTitle />

      <main id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerMarkup
            player="player 1"
            symbol="X"
            active={activePlayer === "X"}
          onChangeName={handleNamesChanges}
          />
          <PlayerMarkup
            player="player 2"
            symbol="O"
            active={activePlayer === "O"}
            onChangeName={handleNamesChanges}

          />
        </ol>
        <GridBoard board={gameBoard} onSquareChange={handleSquareChange} />
        {(winner || isDraw) && (
          <GameOver rematch={handleRematch} winner={winner} />
        )}
      </main>
      <PlayerLogs turns={gameTurns} />
    </>
  );
}

export default App;
