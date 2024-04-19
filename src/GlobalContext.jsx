// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({});

  const setGlobalState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
