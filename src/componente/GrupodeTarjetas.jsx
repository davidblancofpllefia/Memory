import React, { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';

export function GrupoTarjetas() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const obtenerPokemonesAleatorios = async () => {
      try {
        // Generamos 9 IDs aleatorios entre 1 y 898 (total de Pokémon en la API)
        const idsAleatorios = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1025) + 1);
        // Duplicamos los IDs para tener dos copias de cada uno
        const idsRepetidos = idsAleatorios.concat(idsAleatorios);
        const pokemonPromises = idsRepetidos.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          return {
            id: data.id,
            nombre: data.name,
            imagen: data.sprites.front_default
          };
        });
        const pokemonesObtenidos = await Promise.all(pokemonPromises);
        // Barajamos la lista de Pokémon para que los repetidos no estén juntos
        pokemonesObtenidos.sort(() => Math.random() - 0.5);
        setPokemones(pokemonesObtenidos);
      } catch (error) {
        console.error('Error al obtener los Pokémon:', error);
      }
    };

    obtenerPokemonesAleatorios();
  }, []);

  return (
    <div className="flex flex-wrap">
      {pokemones.map((pokemon, index) => (
        <Tarjeta
          key={`${pokemon.id}-${index}`} // Usamos index para garantizar claves únicas
          imagen={pokemon.imagen}
          nombre={pokemon.nombre}
        />
      ))}
    </div>
  );
}




