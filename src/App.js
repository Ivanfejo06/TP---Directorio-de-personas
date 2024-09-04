import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Persona from './components/Persona';
import Estadisticas from './components/Estadisticas';
import Contacto from './components/Contacto';
import './App.css';  // Importar el archivo de estilos globales

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persona/:id" element={<Persona />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;