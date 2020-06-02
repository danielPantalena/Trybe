import React from 'react';
import './App.css';
import pokemonsObjs from './data';
import Pokedex from './components/Pokedex/Pokedex';
import AddPokeButton from './components/AddPokeButton/AddPokeButton';

const pokemonsArray = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  addPoke = () => {
    const numberOfPokes = this.state.pokemons.length;
    if (numberOfPokes < pokemonsObjs.length) {
      pokemonsArray.push(pokemonsObjs[numberOfPokes]);
      this.setState({
        pokemons: pokemonsArray,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <AddPokeButton handleClick={this.addPoke} />
        <Pokedex pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
