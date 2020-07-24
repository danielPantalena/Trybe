import React, { useContext } from 'react';
import { Context } from './context';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal() {
  const { signalColor, changeSignalColor } = useContext(Context);
  return (
    <div>
      <div className="button-container">
        <button type="button" value="red" onClick={(e) => changeSignalColor(e.target.value)}>
          Red
        </button>
        <button type="button" value="yellow" onClick={(e) => changeSignalColor(e.target.value)}>
          Yellow
        </button>
        <button type="button" value="green" onClick={(e) => changeSignalColor(e.target.value)}>
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

export default TrafficSignal;
