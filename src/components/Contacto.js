import React from 'react';
import Navegacion from './Navegacion';
import './Contacto.css'; // Importar el archivo de estilos

const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <div className="contacto-container">
        <h1>Contacto</h1>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label>Apellido:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Edad:</label>
            <input type="number" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;