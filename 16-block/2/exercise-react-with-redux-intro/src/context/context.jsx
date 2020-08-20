import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [signalColor, setSignalColor] = useState('red');
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false });

  const changeSignalColor = (color) => setSignalColor(color);
  const moveCar = (car) => setCars({...cars, []})
};
