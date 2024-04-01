import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";
import search from "../assets/search.png";

function SearchBar(props) {
  const [searchterm, setSearchterm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?searchterm=${searchterm}`);
    props.search(searchterm);
  };

  const handleChange = (event) => {
    setSearchterm(event.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="search"
        onChange={handleChange}
      />
      <button className="search-btn" onClick={handleSearch}>
        <img src={search} alt="search" id="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
