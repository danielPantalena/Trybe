import React from 'react';

class AddPokeButton extends React.Component {
  render() {
    // console.log('this.props Button', this.props)
    return <button onClick={this.props.handleClick}>Next Poke</button>;
  }
}

export default AddPokeButton;
