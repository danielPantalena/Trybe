import React, { useContext } from 'react';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import './App.css';
import { ContextProvider } from './context';

export default function App() {
  return (
    <>
      <ContextProvider>
        <TrafficSignal />
        <Cars />
      </ContextProvider>
    </>
  );
}
