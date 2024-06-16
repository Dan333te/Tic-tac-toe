import PageTitle from "./components/PageTitle";
import PlayerMarkup from "./components/PlayerMarkup";
import GridBoard from "./components/GridBoard";
import { useState } from "react";
import PlayerLogs from "./components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSquareChange(rowInd, colInd) {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = activePlayer;
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <>
      <PageTitle />

      <main id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerMarkup
            player="player 1"
            symbol="x"
            active={activePlayer === "X"}
          />
          <PlayerMarkup
            player="player 2"
            symbol="O"
            active={activePlayer === "O"}
          />
        </ol>
        <GridBoard turns={gameTurns} onSquareChange={handleSquareChange} />
        
      </main>
      <PlayerLogs turns={gameTurns}/>
    </>
  );
}

export default App;
