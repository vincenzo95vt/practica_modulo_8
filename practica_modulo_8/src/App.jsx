import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={}/>
            <Route path='/createPokemon' element={}/>
            <Route path='/allPokemon' element={}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
