import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [signalColor, setSignalColor] = useState('red');
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false });

  const changeSignalColor = (color) => {
    setSignalColor(color);
  };

  const moveCar = (color) => {
    setCars({ ...cars, [`${color}Car`]: !cars[`${color}Car`] });
  };

  const functions = { moveCar, changeSignalColor };
  const states = { cars, signalColor };

  const context = { ...functions, ...states };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
