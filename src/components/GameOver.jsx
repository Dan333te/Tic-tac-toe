import React from "react";

const GameOver = ({winner ,rematch}) => {
  return (
    <div id="game-over">
      <h2>Game over !</h2>
   {winner && <p>{winner} Won !</p>}
   {!winner && <p>Draw!</p>}
    <button onClick={rematch}>Rematch</button>
    </div>
  );
};

export default GameOver;
