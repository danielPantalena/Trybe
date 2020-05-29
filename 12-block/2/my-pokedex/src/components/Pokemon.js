import React from 'react';
import '../App.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon-class'>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>
          <strong>{type}</strong>
        </p>
        <p>{averageWeight.value + averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon;
