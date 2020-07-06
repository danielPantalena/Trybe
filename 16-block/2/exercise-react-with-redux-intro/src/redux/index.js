import { createStore, combineReducers } from 'redux';
import { CHANGE_SIGNAL } from './actionCreators'; // exercise-one
import { MOVE_CAR } from './actionCreators'; // exercise-two

// exercise-one
const initialStateChangeSignal = {
  signal: {
    color: 'red',
  },
};

function changeSignalReducer(state = initialStateChangeSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

// exercise-two
const initialStateMoveCar = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function moveCarReducer(state = initialStateMoveCar, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

// exercise-three
const combinedReducers = combineReducers({
  changeSignal: changeSignalReducer,
  moveCar: moveCarReducer,
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
