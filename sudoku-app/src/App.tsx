import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

type Board = number[][];
function App() {

  const [board, setBoard] = useState<Board>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#c02828ff'
    }}>
      <h1>Hello Sudoku</h1>
      <button
        onClick={() =>
          setBoard(Array.from({ length: 9 }, () => Array(9).fill(0)))
        }>
        Reset Board
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 40px)',
        gridTemplateRows: 'repeat(9, 40px)',
        width: '360px',
        height: '360px',
        border: '2px solid black',
        marginTop: '20px'
      }}>
        {board.map((row: number[], rowIndex: number) =>
          row.map((cell: number, colIndex: number) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                backgroundColor: ((Math.floor(rowIndex / 3) + Math.floor(colIndex / 3)) % 2 === 0) ? '#f0f0f0' : '#ffffff'
              }}
            >
              {cell !== 0 ? cell : ""}
            </div>
          ))
        )}
        {/*sudoku board will come here */}
      </div>
    </div>
  );
}

export default App
