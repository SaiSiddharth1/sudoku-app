import { useEffect, useState } from 'react';
import Cell from './components/cell.jsx';

function App() {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;
      const key = event.key;

      if (key >= '1' && key <= '9') {
        setBoard((prevBoard) => {
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
        backgroundColor: '#c02828',
      }}
    >
      <h1 style={{ color: 'white' }}>Hello Sudoku</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 40px)',
          gridTemplateRows: 'repeat(9, 40px)',
          gap: '0px',
          backgroundColor: 'black',
          border: '2px solid black',
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
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
    </div>
  );
}

export default App;
