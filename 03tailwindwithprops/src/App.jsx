import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    isSkilled: true,
    probability: 2000
  }
  let myArr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Namaste Tailwind</h1>
      <Card username='Manglam' btnText="click me" />
      <Card username='Dubey' />
    </>
  )
}

export default App
