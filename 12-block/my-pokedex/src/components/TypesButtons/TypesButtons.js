import React from 'react';
import TypeButton from './TypeButton/TypeButton';

class TypesButtons extends React.Component {
  render() {
    return (
      <>
        <TypeButton handleClick={this.props.handleClick} type="All" />
        <TypeButton handleClick={this.props.handleClick} type="Bug" />
        <TypeButton handleClick={this.props.handleClick} type="Dragon" />
        <TypeButton handleClick={this.props.handleClick} type="Electric" />
        <TypeButton handleClick={this.props.handleClick} type="Fire" />
        <TypeButton handleClick={this.props.handleClick} type="Normal" />
        <TypeButton handleClick={this.props.handleClick} type="Poison" />
        <TypeButton handleClick={this.props.handleClick} type="Psychic" />
      </>
    );
  }
}

export default TypesButtons;
