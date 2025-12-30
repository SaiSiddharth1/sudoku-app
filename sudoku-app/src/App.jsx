import { useEffect, useState } from 'react';
// 1. Capitalize the import to follow React conventions
import Cell from './components/cell.jsx';

function App() {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  // 2. Add the missing state for selection
  const [selectedCell, setSelectedCell] = useState(null);

  function handleCellClick(row, col) {
    setSelectedCell({ row, col });
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#c02828'
    }}>
      <h1>Hello Sudoku</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 40px)',
        gridTemplateRows: 'repeat(9, 40px)',
        width: '360px',
        height: '360px',
        border: '2px solid black',
        marginTop: '20px',
        backgroundColor: 'white' // Added so cells are visible against the red background
      }}>
        {board.map((row, rowIndex) =>
          row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
              rowIndex={rowIndex}
              colIndex={colIndex}
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