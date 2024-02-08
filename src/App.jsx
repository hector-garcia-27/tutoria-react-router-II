import './App.css'
import Navbar from './components/Navbar'
import Detalles from './veiws/Detalles'
import Home from './veiws/Home'
import Personajes from './veiws/Personajes'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/personajes/:id' element={<Detalles/>} />
      </Routes>

    </>
  )
}

export default App
