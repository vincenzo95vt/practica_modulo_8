import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuComponent from './Components/MenuComponent/MenuComponent'
import CreatePokemonComponent from './Components/CreatePokemonComponent/CreatePokemonComponent'
import SeeAllPokemonComponent from './Components/SeeAllPokemonComponent/SeeAllPokemonComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<MenuComponent/>}/>
            <Route path='/createPokemon' element={<CreatePokemonComponent/>}/>
            <Route path='/allPokemon' element={<SeeAllPokemonComponent/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
