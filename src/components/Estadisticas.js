import React from 'react';
import personas from './Personas';
import Navegacion from './Navegacion';
import './Estadisticas.css'; // Importar el archivo de estilos

const Estadisticas = () => {
  // Convertir edades a números para comparaciones
  const personasConEdad = personas.map(p => ({ ...p, edad: parseInt(p.edad) }));

  let edadMaxima = -Infinity;
  let edadMinima = Infinity;
  const nombresMayorEdad = [];
  const nombresMenorEdad = [];

  // Iterar sobre cada persona para encontrar la edad máxima, mínima y nombres correspondientes
  personasConEdad.forEach(p => {
    // Manejar edad máxima
    if (p.edad > edadMaxima) {
      edadMaxima = p.edad;
      nombresMayorEdad.length = 0; // Limpiar la lista si encontramos una nueva edad máxima
      nombresMayorEdad.push(`${p.nombre} ${p.apellido}`);
    } else if (p.edad === edadMaxima) {
      nombresMayorEdad.push(`${p.nombre} ${p.apellido}`);
    }

    // Manejar edad mínima
    if (p.edad < edadMinima) {
      edadMinima = p.edad;
      nombresMenorEdad.length = 0; // Limpiar la lista si encontramos una nueva edad mínima
      nombresMenorEdad.push(`${p.nombre} ${p.apellido}`);
    } else if (p.edad === edadMinima) {
      nombresMenorEdad.push(`${p.nombre} ${p.apellido}`);
    }
  });

  // Contar cuántos son mayores de 35 años
  const mayoresDe35 = personasConEdad.filter(p => p.edad > 35).length;

  return (
    <div>
      <Navegacion />
      <div className="estadisticas-container">
        <h1>Estadísticas</h1>
        <p><strong>Cuántos mayores de 35 años hay:</strong> {mayoresDe35}</p>
        <p><strong>Persona(s) de mayor edad:</strong> {nombresMayorEdad.length > 0 ? nombresMayorEdad.join(', ') : 'No hay personas'}</p>
        <p><strong>Persona(s) de menor edad:</strong> {nombresMenorEdad.length > 0 ? nombresMenorEdad.join(', ') : 'No hay personas'}</p>
      </div>
    </div>
    
  );
};

export default Estadisticas;