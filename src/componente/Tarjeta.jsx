import React, { useState } from 'react';

function Tarjeta({ imagen, nombre }) {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="w-32 h-48 bg-white shadow-md rounded-md overflow-hidden m-2 flex flex-col">
      <p className="text-gray-600 text-sm text-center mb-2">Clicks: {contador}</p>
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-32 object-cover"
        onClick={incrementarContador}
      />
      <div className="p-2">
        <p className="text-gray-800 font-medium text-sm text-center">{nombre}</p>

      </div>
    </div>
  );
}

export default Tarjeta;







