import { React, useState } from "react";
import "../styles/RegisterForm.css";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const [account, setAccount] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChangeFirstName = (event) => {
    setAccount({
      first_name: event.target.value,
      last_name: account.last_name,
      username: account.username,
      email: account.email,
      password: account.password,
    });
  };

  const handleChangeLastName = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: event.target.value,
      username: account.username,
      email: account.email,
      password: account.last_name,
    });
  };

  const handleChangeUsername = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: event.target.value,
      email: account.email,
      password: account.password,
    });
  };

  const handleChangeEmail = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: account.username,
      email: event.target.value,
      password: account.password,
    });
  };

  const handleChangePassword = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: account.username,
      email: account.email,
      password: event.target.value,
    });
  };

  const handleRegister = async () => {
    const url = `http://localhost:3000/account`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    }).then((result) => result.json());
    navigate("/login");
  };

  return (
    <div className="login-container">
      <h1 className="form-title-register">Register</h1>
      <div className="form-container">
        <h1 className="form-label-register">First Name</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeFirstName}
        />
        <h1 className="form-label-register">Last Name</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeLastName}
        />
        <h1 className="form-label-register">Email</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeEmail}
        />
        <h1 className="form-label-register">Username</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeUsername}
        />
        <h1 className="form-label-register">Password</h1>
        <input
          className="register-input"
          type="password"
          onChange={handleChangePassword}
        />
        <button className="register-btn" onClick={handleRegister}>
          CREATE
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
