import React from 'react';

class AddPokeButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        disabled={this.props.buttonDisabled}
      >
        Next Poke
      </button>
    );
  }
}

export default AddPokeButton;
