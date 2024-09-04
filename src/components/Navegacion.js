import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css'; // Importar el archivo CSS

const Navegacion = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/estadisticas">Estadísticas</Link>
      <Link className="nav-link" to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navegacion;