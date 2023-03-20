import './App.css'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Portafolio />
      <Contacto />
    </div>
  )
}

export default App
