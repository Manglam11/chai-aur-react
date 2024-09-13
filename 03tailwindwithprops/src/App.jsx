import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Namaste Tailwind</h1>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full" src="https://www.pexels.com/photo/gray-owl-perched-on-a-tree-stamp-206676/" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure></>
  )
}

export default App
