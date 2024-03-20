import "./App.css";
import { Routes, Route } from "react-router-dom";
import { atom } from "jotai";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";

export const accountAtom = atom({
  _id: "-1",
  email: "",
  first_name: "",
  last_name: "",
  username: "",
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
