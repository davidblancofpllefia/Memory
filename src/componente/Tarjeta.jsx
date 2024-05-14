import React, { useState } from 'react';


function Tarjeta({ imagen, nombre }) {
  const [girada, setGirada] = useState(false);

  const handleClick = () => {
    setGirada(!girada);
  };

  return (
    <div
      className={`w-32 h-48 relative tarjeta ${girada ? 'girada' : ''}`}
      onClick={handleClick}
    >
      <div className="tarjeta-cara tarjeta-delantera">
        <img src="/src/imagenes/tcg-card-back.jpg" alt="Reverso de la tarjeta" className="w-full h-full object-cover" />
      </div>
      <div className={`tarjeta-cara tarjeta-trasera absolute top-0 left-0 w-full h-full bg-white shadow-md rounded-md flex flex-col justify-center items-center ${girada ? 'visible' : 'invisible'}`}>
        <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
        <p className="text-gray-800 font-medium">{nombre}</p>
      </div>
    </div>
  );
}

export default Tarjeta;







