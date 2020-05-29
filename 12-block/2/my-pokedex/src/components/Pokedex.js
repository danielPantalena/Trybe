import React from 'react';
import Pokemon from './Pokemon';
import '../App.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          {pokemons.map((pokemonObj, index) => (
            <Pokemon key={index} pokemon={pokemonObj} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
