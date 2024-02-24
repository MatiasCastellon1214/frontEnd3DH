import { useState } from 'react'
import React from 'react'
import Alumno from './components/Alumno'


import './App.css'

function App() {
  console.log('Hola, Mundo')
  const [count, setCount] = useState(0)

  return (
    <> 
      
      <h1>Mi segunda clase de FEIII</h1>
      <ul>
        <li>Alumno 1</li>
        <li>Alumno 2</li>
        <li>Alumno 3</li>
        <li>Alumno 4</li>
        <li>Alumno 5</li>
      </ul>
      <input type="text" />
      <button>Hola</button>
      <img src="" alt="" />
      <Alumno/>
      <Alumno/>
      
    </>
  )
}

export default App
