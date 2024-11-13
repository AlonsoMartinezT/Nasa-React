// Importamos el componente Navbar
import Navbar from './components/Navbar';
import Astros from './components/Astros';
import Home from './components/Home';
import About from './components/About';
import Apod from './components/Apod';
// Importamos react-router-dom
import {Routes, Route} from "react-router-dom";
import './App.css';

// Comentarios 
function App() {
  // Generamos un array 
  const links = [
    { href: '/', text: 'Inicio'},
    { href: '/astros', text: 'astros'},
    { href: '/apod', text: 'apod'},
    { href: '/about', text: 'About'},
  ]
  return (
    <>
      {/*comentario dentro de un return*/}
      <Navbar links={links}/>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Astros/>} path="/astros" />
        <Route element={<About/>} path="/about" />
        <Route element={<Apod/>} path="/apod" />
      </Routes>
    </>
  )
}

export default App
