import { useEffect, useState } from "react";
import Cell from "./components/cell.jsx";
import { isValidMove } from "./utils/validators.js";
import { solveSudoku } from "./utils/solver.js";
import { generatePuzzle } from "./utils/generator.js";

function createEmptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

function App() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [selectedCell, setSelectedCell] = useState(null);
  const [solverCells, setSolverCells] = useState([]);

  // Generate puzzle on load
  useEffect(() => {
    handleNewGame();
  }, []);

  function handleNewGame() {
    const puzzle = generatePuzzle(30); // medium difficulty
    setBoard(puzzle);
    setSelectedCell(null);
    setSolverCells([]); // reset solver highlights
  }

  function handleSolve() {
    const emptyCells = [];

    // collect empty cells BEFORE solving
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === 0) {
          emptyCells.push({ row: r, col: c });
        }
      }
    }

    const solvedBoard = solveSudoku(board);
    setBoard(solvedBoard);
    setSolverCells(emptyCells);
    setSelectedCell(null);
  }

  function handleCellClick(row, col) {
    setSelectedCell({ row, col });
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedCell) return;
      if (solverCells.length > 0) return; // prevent edits after solve

      const { row, col } = selectedCell;
      const key = event.key;

      if (key >= "1" && key <= "9") {
        const num = Number(key);

        setBoard((prevBoard) => {
          const newBoard = prevBoard.map((r) => [...r]);
          newBoard[row][col] = 0; // clear first for validation

          if (!isValidMove(newBoard, row, col, num)) {
            alert("Invalid Move");
            return prevBoard;
          }

          newBoard[row][col] = num;
          return newBoard;
        });
      }

      if (key === "0" || key === "Backspace" || key === "Delete") {
        setBoard((prevBoard) => {
          const newBoard = prevBoard.map((r) => [...r]);
          newBoard[row][col] = 0;
          return newBoard;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCell, solverCells]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#191818ff",
      }}
    >
      <h1 style={{ color: "white", cursor: "pointer" }}>Hello Sudoku</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 40px)",
          gridTemplateRows: "repeat(9, 40px)",
          backgroundColor: "black",
          border: "5px solid white",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
              row={rowIndex}
              col={colIndex}
              isSelected={
                selectedCell &&
                selectedCell.row === rowIndex &&
                selectedCell.col === colIndex
              }
              isSolverCell={solverCells.some(
                (pos) => pos.row === rowIndex && pos.col === colIndex
              )}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>

      <div
        style={{
          margin: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
          display: "flex",
          gap: "40px",
        }}
      >
        <button onClick={handleNewGame}>New Game</button>
        <button onClick={handleSolve}>Solve</button>
      </div>
    </div>
  );
}

export default App;
// 