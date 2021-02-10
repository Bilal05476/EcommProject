import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({
  reducer,
  initialState,
  authreducer,
  children,
}) => {
  return (
    <StateContext.Provider
      value={useReducer(reducer, initialState, authreducer)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
