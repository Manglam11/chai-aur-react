import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      // counter += 1;
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)
      setCounter((preCounter) => preCounter + 1)
      setCounter((preCounter) => preCounter + 1)
      setCounter((preCounter) => preCounter + 1)
      setCounter((preCounter) => preCounter + 1)
    } else {
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter)

    } else {
      setCounter(counter)
    }
  }

  return (
    <>
      <h2>React Hooks</h2>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button
        onClick={removeValue}
      >Remove Value </button>
      <p>footer</p>
    </>
  )
}

export default App
