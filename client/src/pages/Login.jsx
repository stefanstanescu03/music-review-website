import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="login-div">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default Login;
