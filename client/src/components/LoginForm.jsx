import { React, useState } from "react";
import "../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accountAtom } from "../App";

function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [display, setDisplay] = useState(false);

  const [loggedAccount, setLoggedAccount] = useAtom(accountAtom);

  const handleChangeUsername = (event) => {
    setAccount({ username: event.target.value, password: account.password });
  };

  const handleChangePassword = (event) => {
    setAccount({ username: account.username, password: event.target.value });
  };

  const handleLogin = async () => {
    const url = `http://localhost:3000/account?username=${account.username}&password=${account.password}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => result.json());

    if (response.message === "Account not found") {
      setDisplay(true);
    } else {
      setLoggedAccount({
        _id: response[0]._id,
        email: response[0].email,
        first_name: response[0].first_name,
        last_name: response[0].last_name,
        username: response[0].username,
      });
      navigate("/");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h1 className="form-title">Login</h1>
      <div className="form-container">
        <h1 className="form-label">Username</h1>
        <input
          className="login-input"
          type="text"
          onChange={handleChangeUsername}
        />
        <h1 className="form-label">Password</h1>
        <input
          className="login-input"
          type="password"
          onChange={handleChangePassword}
        />
        {display && <h1 className="incorrect-text">Incorrect credentials</h1>}
        <button className="signin-btn" onClick={handleLogin}>
          SIGN IN
        </button>
        <button
          className="create-acc-btn"
          onClick={() => navigate("/register")}
        >
          Create account
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
