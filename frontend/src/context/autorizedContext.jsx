import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};
