import React from "react";
import { useAtom } from "jotai";
import { accountAtom } from "../App";
import "../styles/Profile.css";

import Navbar from "../components/Navbar";

function Profile() {
  const [account] = useAtom(accountAtom);

  return (
    <div>
      <Navbar />
      <div className="account-info-container">
        <h1 className="greeting">Hello {account.last_name}</h1>
        <div className="info-container">
          <h1 className="info-text">First name: {account.first_name}</h1>
          <h1 className="info-text">Last name: {account.last_name}</h1>
          <h1 className="info-text">Username: {account.username}</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
