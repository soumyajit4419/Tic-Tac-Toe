import React, { useState, useEffect } from "react";
import Box from "./Box";

const initalValue = ["", "", "", "", "", "", "", "", ""];

var counter = 0 ;

function Board() {
  const [boardState, updateBoardState] = useState(initalValue);
  const [boardValue, updateBoardValue] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      if (
        boardState[lines[i][0]] &&
        boardState[lines[i][0]] === boardState[lines[i][1]] &&
        boardState[lines[i][0]] === boardState[lines[i][2]]
      ) {
        setWinner(boardState[lines[i][0]]);
        setGameEnd(true);
      }
    }
  }, [boardState]);
  
  const handelClick = (idx) => {
    if (gameEnd) {
      return;
    }
    counter = counter + 1;
    console.log(counter);

    const newArr = Array.from(boardState);

    if (newArr[idx]) {
      alert("Click on an Empty Cell");
      counter--;
      return;
    }

    newArr[idx] = boardValue ? "X" : "O";
    updateBoardState(newArr);
    updateBoardValue(!boardValue);
  };

  return (
    <div >
      <span id="header">

      Tic - Tak - Toe
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box value={boardState[0]} onClick={(e) => handelClick(0)} />
        <Box value={boardState[1]} onClick={(e) => handelClick(1)} />
        <Box value={boardState[2]} onClick={(e) => handelClick(2)} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box value={boardState[3]} onClick={(e) => handelClick(3)} />
        <Box value={boardState[4]} onClick={(e) => handelClick(4)} />
        <Box value={boardState[5]} onClick={(e) => handelClick(5)} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box value={boardState[6]} onClick={(e) => handelClick(6)} />
        <Box value={boardState[7]} onClick={(e) => handelClick(7)} />
        <Box value={boardState[8]} onClick={(e) => handelClick(8)} />
      </div>

      <button id="btn-reset"
        onClick={(e) => {
          updateBoardState(initalValue);
          setGameEnd(false);
          updateBoardValue(true);
          counter = 0;
        }}
        style={{ marginTop: "15px", padding: "8px 15px", cursor:"pointer"}}
      >
        Reset
      </button>

      <div style={{ marginTop: "15px" }}>
        { gameEnd ? (<span>{winner} won the game</span>) : (counter === 9) ? <span>GAME DRAW</span> : (<span>Click on the cells to start</span>)}

      </div>
    </div>
  );
}

export default Board;
