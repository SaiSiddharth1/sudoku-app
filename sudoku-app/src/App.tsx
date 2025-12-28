// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Hello Sudoku</h1>
      <div style={{
        width: '360px',
        height: '360px',
        border: '2px solid black',
        marginTop: '20px'
      }}>
        {/*sudoku board will come here */}
      </div>
    </div>
  )
}

export default App
