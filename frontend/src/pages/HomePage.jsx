import "../assets/styles/Home.css";
import { useContext, useState } from "react";
import { authContext } from "../context/autorizedContext";
import { logoutSession, reqSession } from "../apis/auth.api";
import { useEffect } from "react";
export const Home = () => {
  const { logout } = useContext(authContext);
  const [sesion, setSession] = useState({});

  useEffect(() => {
    const auth = async () => {
      const { session, req } = await reqSession();
      if (!req.ok) {
        return logout();
      }
      setSession(session);
    };
    auth();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to my home page {sesion.username} </h1>
      <button
        on
        onClick={async () => {
          await logoutSession();
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};
