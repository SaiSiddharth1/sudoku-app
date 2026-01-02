import { useEffect, useState } from 'react';
import Cell from './components/cell.jsx';
import { isValidMove } from './utils/validators.js';
import { solveSudoku } from './utils/solver.js';
import { generateSudoku } from './utils/generator.js';

function createEmptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

function App() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [selectedCell, setSelectedCell] = useState(null);

  function handleNewGame() {
    const puzzle = generateSudoku(30); // Generate a puzzle with 30 clues
    setBoard(puzzle);
    setSelectedCell(null);
  }
  function handleSolve() {
    const solveBoard = solveSudoku(board);
    setBoard(solveBoard);
    setSelectedCell(null);
  }


  function handleCellClick(row, col) {
    setSelectedCell({ row, col });
  };

  useEffect(() => {
    handleNewGame();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;
      const key = event.key;

      if (key >= '1' && key <= '9') {
        const num = Number(key)
        setBoard((prevBoard) => {
          if (!isValidMove(prevBoard, row, col, num)) {
            alert("Invalid Move");
            return prevBoard;
          }
          const newBoard = prevBoard.map((r) => [...r]);
          newBoard[row][col] = Number(key);
          return newBoard;
        });
      } else if (key === '0' || key === 'Backspace' || key === 'Delete') {
        setBoard((prevBoard) => {
          const newBoard = prevBoard.map((r) => [...r]);
          newBoard[row][col] = 0;
          return newBoard;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell]);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#191818ff',
      }}
    >
      <h1 style={{ color: 'white', cursor: 'pointer' }}>Hello Sudoku</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 40px)',
          gridTemplateRows: 'repeat(9, 40px)',
          gap: '0px',
          color: 'goldenrod',
          backgroundColor: 'black',
          border: '5px solid WHITE',
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
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <div
        style={{
          margin: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          color: 'White',
          cursor: 'pointer',
          display: 'flex',
          gap: '40px',
        }}
      >
        <button
          onClick={handleNewGame}
        >
          New Game
        </button>
        <button
          onClick={handleSolve}
        >
          Solve
        </button>
      </div>
    </div>
  );
}

export default App;
