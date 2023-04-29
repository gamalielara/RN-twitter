import React from "react";
import eventReducer from "./reducer";

export const EventContext = React.createContext<any>({ events: [] });

//@ts-ignore
export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer<any>(eventReducer, []);
  return (
    <EventContext.Provider value={{ events: state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};
