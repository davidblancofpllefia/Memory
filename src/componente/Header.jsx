import React from 'react';
import { Link } from 'react-router-dom'; 

export function Header() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center px-4">
        <ul className="flex space-x-4 text-decoration-none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tarjetas">Pokemons Memory</Link>
          </li>
          <li>
            <Link to="/marvel-memory">Marvel Memory</Link>
          </li>
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
