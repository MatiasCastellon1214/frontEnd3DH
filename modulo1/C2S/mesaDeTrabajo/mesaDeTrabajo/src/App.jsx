import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerComponente from './components/PrimerComponente'
import SegundoComponente from './components/SegundoComponente'
import TercerComponente from './components/TercerComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bueno, largamos nomás</h1>
      <hr></hr>
      <h2>A continuación va el primer componente llamado "PrimerComponente" (mucha imaginación, verdad?): </h2>
      <PrimerComponente/>
      <hr></hr>
      <h2>Vamos con el segundo componente que lista las actividades copadas que hice en el día</h2>
      <SegundoComponente/>
      <hr></hr>
      <h2>Tercer componente: imagenes, inputs y otras yerbas</h2>
      <TercerComponente/>
      
    </>
  )
}

export default App
