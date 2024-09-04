import React from 'react';
import Navegacion from './Navegacion';
import personas from './Personas';
import { Link } from 'react-router-dom';
import './Home.css'; // Importar el archivo de estilos para Home

const Home = () => {
  return (
    <div className='centre'>
      <Navegacion />
      <h1>Listado de Personas</h1>
      <ul className="personas-lista">
        {personas.map(persona => (
          <li key={persona.id}>
            <Link to={`/persona/${persona.id}`}>{persona.nombre} {persona.apellido}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;