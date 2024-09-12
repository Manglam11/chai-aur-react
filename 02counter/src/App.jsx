import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 5;
  const addValue = () => {
    console.log("Value added", counter)
    counter += 1;
  }
  return (
    <>
      <h2>React Hooks</h2>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <button>Remove Value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
