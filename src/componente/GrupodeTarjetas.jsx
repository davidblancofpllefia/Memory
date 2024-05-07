import React, { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';

export function GrupoTarjetas() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
        const data = await response.json();
        // Extraemos los resultados que contienen información de cada Pokémon
        const pokemonesData = data.results;
        // Mapeamos los resultados para obtener la información de cada Pokémon
        const pokemonesInfo = await Promise.all(pokemonesData.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        }));
        // Formateamos la información de cada Pokémon según lo esperado por el componente Tarjeta
        const formattedPokemones = pokemonesInfo.map(pokemon => ({
          id: pokemon.id,
          nombre: pokemon.name,
          imagen: pokemon.sprites.front_default
        }));
        // Establecemos los Pokémon en el estado
        setPokemones(formattedPokemones);
      } catch (error) {
        console.error('Error obteniendo los datos de los Pokémon:', error);
      }
    };

    obtenerPokemones();
  }, []);

  return (
    <div className="flex flex-wrap">
      {pokemones.map((pokemon) => (
        <Tarjeta
          key={pokemon.id}
          imagen={pokemon.imagen}
          nombre={pokemon.nombre}
        />
      ))}
    </div>
  );
}





