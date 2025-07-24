import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componentes/Card'
import './App.css'
import PracticaDeCards from './componentes/practicaDeCards'

function App() {
  const [count, setCount] = useState(0)
  const items = ['React', 'JavaScript', 'Vite']
  const ArrayDeTecnologias = [
    { id: 101, valor: 'React' },
    { id: 102, valor: 'JavaScript' },
    { id: 103, valor: 'Vite' }
  ];
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Card title="Card Title" description="This is a description of the card." />
        <Card title="Esta es una reutilizacion" description="estoy reutilizando cards." />
        <PracticaDeCards Completados={5} Total={10} />
        <h2>Items</h2>
        <ul>
          {ArrayDeTecnologias.map((tecnologia) => (
            <li key={tecnologia.id}>{tecnologia.valor}</li>
          ))}
        </ul>
      </section>
    </>
    
  )
}

export default App
