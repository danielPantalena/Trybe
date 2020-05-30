import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          {pokemons.map((pokemonObj, index) => (
            <Pokemon key={index} pokemon={pokemonObj} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
