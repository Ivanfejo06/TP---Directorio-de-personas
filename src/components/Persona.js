import React from 'react';
import { useParams } from 'react-router-dom';
import personas from './Personas';
import Navegacion from './Navegacion';
import './Persona.css'; // Importar el archivo de estilos

const Persona = () => {
  const { id } = useParams();
  const persona = personas.find(p => p.id === id);

  if (!persona) {
    return <p>Persona no encontrada.</p>;
  }

  return (
    <div>
        <Navegacion />
        <div className="persona-container">
            <h1>Información de la Persona</h1>
            <p><strong>Nombre:</strong> {persona.nombre}</p>
            <p><strong>Apellido:</strong> {persona.apellido}</p>
            <p><strong>Email:</strong> {persona.email}</p>
            <p><strong>Edad:</strong> {persona.edad}</p>
        </div>
    </div>
    
  );
};

export default Persona;