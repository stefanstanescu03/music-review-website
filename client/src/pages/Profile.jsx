import React from "react";
import { useAtom } from "jotai";
import { accountAtom } from "../App";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Profile() {
  const [account, setAccount] = useAtom(accountAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccount({
      _id: "-1",
      email: "",
      first_name: "",
      last_name: "",
      username: "",
    });
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div className="account-info-container">
        <h1 className="greeting">Hello {account.last_name}</h1>
        <div className="info-container">
          <h1 className="info-text">First name: {account.first_name}</h1>
          <h1 className="info-text">Last name: {account.last_name}</h1>
          <h1 className="info-text">Username: {account.username}</h1>
          <button
            className="change-btn"
            onClick={() => navigate("/profile/change")}
          >
            Change credentials
          </button>{" "}
          <br />
          <button className="change-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
