import React from 'react';
import Pokemons from './PokemonList'
import Card from './PokeCards'
import './App.css'

function App() {
  return (
    <>
      <h1>Pokédex</h1>
      <div id="pokeDex">
        {Pokemons.map(pokemon => (<Card
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          experience={pokemon.base_experience}
        />)
        )}
      </div>
    </>
  )
}

export default App;
