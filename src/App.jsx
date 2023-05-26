import React from 'react';
import './App.css'
import AdministrarPelicula from './components/AdministrarPelicula'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <AdministrarPelicula />
      <footer className='bg-dark text-center text-secondary py-4'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  );
}

export default App