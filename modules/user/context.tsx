import { createContext, useReducer } from "react";
import userReducer from "./reducer";

export const UserContext = createContext<any>({ users: [] });

//@ts-ignore
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, []);

  return (
    <UserContext.Provider value={{ users: state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
