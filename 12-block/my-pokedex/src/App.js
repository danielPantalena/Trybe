import React from 'react';
import './App.css';
import pokemonsObjs from './data';
import Pokedex from './components/Pokedex/Pokedex';
import AddPokeButton from './components/AddPokeButton/AddPokeButton';
import TypeButton from './components/TypeButton/TypeButton';

let indexOfPoke = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [pokemonsObjs[indexOfPoke]],
      pokemonsArray: pokemonsObjs,
    };
  }

  nextPoke = () => {
    if (indexOfPoke === this.state.pokemonsArray.length - 1) indexOfPoke = -1;
    indexOfPoke += 1;
    console.log(this.state)
    console.log(indexOfPoke)
    this.setState({
      pokemon: [this.state.pokemonsArray[indexOfPoke]],
    });
  };

  filterType = (typeButton) => {
    indexOfPoke = -1;
    if (typeButton === 'All') {
      console.log(this.state)
    console.log(indexOfPoke)
      return this.setState({
        pokemonsArray: pokemonsObjs,
      });
    }
    const filteredArray = pokemonsObjs.filter(
      ({ type }) => type === typeButton,
    );
    console.log(this.state)
    console.log(indexOfPoke)
    this.setState({
      pokemonsArray: filteredArray,
    });
  };

  render() {
    return (
      <div className="App">
        <Pokedex pokemons={this.state.pokemon} />
        <TypeButton handleClick={this.filterType} type="All" />
        <TypeButton handleClick={this.filterType} type="Bug" />
        <TypeButton handleClick={this.filterType} type="Dragon" />
        <TypeButton handleClick={this.filterType} type="Electric" />
        <TypeButton handleClick={this.filterType} type="Fire" />
        <TypeButton handleClick={this.filterType} type="Normal" />
        <TypeButton handleClick={this.filterType} type="Poison" />
        <TypeButton handleClick={this.filterType} type="Psychic" />
        <br />
        <AddPokeButton handleClick={this.nextPoke} />
      </div>
    );
  }
}

export default App;
