import React from 'react';
import './App.css';
import data from './data'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={data}/>
    </div>
  );
}

export default App;
