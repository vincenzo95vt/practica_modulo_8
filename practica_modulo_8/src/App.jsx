import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuComponent from './Components/MenuComponent/MenuComponent'
import CreatePokemonComponent from './Components/CreatePokemonComponent/CreatePokemonComponent'
import SeeAllPokemonComponent from './Components/SeeAllPokemonComponent/SeeAllPokemonComponent'
import ContactComponent from './Components/ContactComponent/ContactComponent'
import DetailsPokemonComponent from './Components/DetailsPokemonComponent/DetailsPokemonComponent'
import FormEditPokemon from './Components/FormEditPokemon/FormEditPokemon'

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
            <Route path='/contact' element={<ContactComponent/>}/>
            <Route path='/pokemonDetail' element={<DetailsPokemonComponent/>}/>
            <Route path='/editPokemon' element={<FormEditPokemon/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
