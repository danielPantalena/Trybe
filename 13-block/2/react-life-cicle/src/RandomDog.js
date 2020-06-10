import React, { Component, Fragment } from 'react';

export default class DogsApi extends Component {
  constructor(props) {
    const dog = JSON.parse(localStorage.dog);
    super(props);
    this.state = { dog, isLoading: true };
  }

  getDogsApi = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    const isLoading = false;
    localStorage.dog = JSON.stringify(dog);
    this.setState({ dog, isLoading });
    return dog;
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.message.includes('terrier')) return false;
    return true;
  }


  render() {
    const { dog } = this.state;
    return (
      <Fragment>
        <img src={dog.message} alt="" />
        <button
          onClick={async () => {
            const dog = await this.getDogsApi();
            this.setState({ dog });
          }}
        >
          Next
        </button>
      </Fragment>
    );
  }
}
