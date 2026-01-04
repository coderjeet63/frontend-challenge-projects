import React, { useState, useEffect } from "react";
import "../cssChallenge/Netflix.css";

function TicTacToe() {

  // ✅ 2D board (3x3)
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (row, col) => {
    if (board[row][col]) return;

    const newBoard = board.map(r => [...r]); // deep clone (important)
    newBoard[row][col] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  // ✅ Tumhari 2D logic ab kaam karegi
  useEffect(() => {
    for (let i = 0; i < 3; i++) {

      // row check
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        alert(`${board[i][0]} wins`);
        return;
      }

      // column check
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        alert(`${board[0][i]} wins`);
        return;
      }
    }

    // diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      alert(`${board[0][0]} wins`);
      return;
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      alert(`${board[0][2]} wins`);
      return;
    }

  }, [board]);

  return (
    <div className="main-netflix flex justify-center items-center">
      <div className="grid grid-cols-3 gap-2 bg-amber-100 p-4">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className="w-20 h-20 bg-white flex items-center justify-center text-2xl font-bold"
            >
              {cell}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
