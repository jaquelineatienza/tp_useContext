import { Login } from "./pages/LoginPage";
import { Home } from "./pages/HomePage";
import { useContext } from "react";
import { authContext } from "./context/autorizedContext";
export const App = () => {
  const { isAuthenticated } = useContext(authContext);
  return isAuthenticated ? <Home /> : <Login />;
};
