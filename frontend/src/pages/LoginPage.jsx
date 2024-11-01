import "../assets/styles/Login.css";
import { useContext, useRef } from "react";
import { authContext } from "../context/autorizedContext";
import { reqLogin, reqSession } from "../apis/auth.api.js";

export const Login = () => {
  const { login } = useContext(authContext);

  const usernameRef = useRef();

  const passwordRef = useRef();

  return (
    <main className="main-container">
      <form>
        <label>
          username
          <input type="text" className="inp" ref={usernameRef} />
        </label>
        <label>
          Password
          <input type="password" className="inp" ref={passwordRef} />
        </label>
        <button
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            const nameData = usernameRef.current.value;
            const passwordData = passwordRef.current.value;
            const { res } = await reqLogin(nameData, passwordData);
            if (res) {
              const { session } = await reqSession();
              if (session) {
                login();
              }
            }
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
};
