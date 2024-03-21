import { React, useState } from "react";
import "../styles/RegisterForm.css";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accountAtom } from "../App";

function EditForm() {
  const navigate = useNavigate();
  const [loggedAccount, setLoggedAccount] = useAtom(accountAtom);
  const [account, setAccount] = useState({
    first_name: loggedAccount.first_name,
    last_name: loggedAccount.last_name,
    username: loggedAccount.username,
    email: loggedAccount.email,
  });

  const handleChangeFirstName = (event) => {
    setAccount({
      first_name: event.target.value,
      last_name: account.last_name,
      username: account.username,
      email: account.email,
    });
  };

  const handleChangeLastName = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: event.target.value,
      username: account.username,
      email: account.email,
    });
  };

  const handleChangeUsername = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: event.target.value,
      email: account.email,
    });
  };

  const handleChangeEmail = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: account.username,
      email: event.target.value,
    });
  };

  const handleChangePassword = (event) => {
    setAccount({
      first_name: account.first_name,
      last_name: account.last_name,
      username: account.username,
      email: account.email,
    });
  };

  const handleChange = async () => {
    const url = `http://localhost:3000/account/${loggedAccount._id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    }).then((result) => result.json());

    setLoggedAccount({
      _id: loggedAccount.id,
      email: account.email,
      first_name: account.first_name,
      last_name: account.last_name,
      username: account.username,
    });

    navigate("/profile");
  };

  return (
    <div className="login-container">
      <h1 className="form-title-register">Edit profile</h1>
      <div className="form-container">
        <h1 className="form-label-register">First Name</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeFirstName}
          value={account.first_name}
        />
        <h1 className="form-label-register">Last Name</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeLastName}
          value={account.last_name}
        />
        <h1 className="form-label-register">Email</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeEmail}
          value={account.email}
        />
        <h1 className="form-label-register">Username</h1>
        <input
          className="register-input"
          type="text"
          onChange={handleChangeUsername}
          value={account.username}
        />
        <button className="register-btn" onClick={handleChange}>
          CHANGE
        </button>
      </div>
    </div>
  );
}

export default EditForm;
