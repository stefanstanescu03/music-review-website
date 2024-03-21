import React from "react";
import "../styles/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accountAtom } from "../App.jsx";

function Navbar() {
  const [account] = useAtom(accountAtom);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <button className="logo-btn" onClick={() => navigate("/")}>
          <h1 id="logo-text">Music Review</h1>
        </button>
      </div>
      <div className="buttons-container">
        <SearchBar />
        <button className="navbar-btn" onClick={() => navigate("/explore")}>
          Explore
        </button>
        <button className="navbar-btn" onClick={() => navigate("/newreleases")}>
          New Releases
        </button>
        {account._id === "-1" ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/profile")}>
            Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
