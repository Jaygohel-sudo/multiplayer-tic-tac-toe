import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState<string | null>("X");
  const handleOnClick = (index: number) => {
    if (board[index] !== null) return;
    const nextBoard = [...board];
    nextBoard[index] = turn;
    setBoard(nextBoard);
    setTurn(turn === "X" ? "O" : "X");
  };
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {board.map((value, index) => (
        <div
          key={index}
          onClick={() => handleOnClick(index)}
          className="border-4 border-[#cfa465] rounded-2xl w-32 h-32 flex items-center justify-center text-4xl font-bold cursor-pointer"
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Board;
