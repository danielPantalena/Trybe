import React from 'react';
import './App.css';
import pokemonsObjs from './data';
import Pokedex from './components/Pokedex/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemons={pokemonsObjs} />
      </div>
    );
  }
}

export default App;
