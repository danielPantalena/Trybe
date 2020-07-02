import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">
          move
        </button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">
          move
        </button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">
          move
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state =>
  // could also return {redCar: state.cars.red, blueCar: state.cars.blue, yellowCar: state.cars.yellow}
  // I did with reduce just to train for scalability. Imagine a LOT of colors.

  // When reducers are combined, need to add the reducer key to state.
  // Examples:
  //   without combined reducers => { redCar: state.cars.red } --- exercise-two
  //   with combined reducers => { redCar: state.moveCar.cars.red } --- exercise-three 
  Object.keys(state.moveCar.cars).reduce((carsObj, car) => {
    carsObj[`${car}Car`] = state.moveCar.cars[car];
    return carsObj;
  }, {});

const mapDispatchToProps = dispatch => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
