import React, { useContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { Context } from './context';

function Cars() {
  const {
    cars: { redCar, blueCar, yellowCar },
    moveCar,
  } = useContext(Context);

  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red')} type="button">
          move
        </button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue')} type="button">
          move
        </button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow')} type="button">
          move
        </button>
      </div>
    </div>
  );
}

export default Cars;
