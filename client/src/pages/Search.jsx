import { React, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Explore.css";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Search() {
  const [records, setRecords] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchterm, setSearchterm] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:3000/record/search/${searchParams.get("searchterm")}`
    )
      .then((response) => response.json())
      .then((data) => setRecords(data));
  }, []);

  const handleChangeSearchterm = async (newSearchterm) => {
    setSearchterm(newSearchterm);
    await fetch(`http://localhost:3000/record/search/${newSearchterm}`)
      .then((response) => response.json())
      .then((data) => setRecords(data));
  };

  return (
    <div className="search-page">
      <Navbar search={handleChangeSearchterm} />

      {records.message === "Record not found" ? (
        <h1 className="no-records-text">No records found</h1>
      ) : (
        <div className="cards-container">
          {records.map((record) => {
            return (
              <Card
                _id={record._id}
                name={record.name}
                artist={record.artists}
                released={record.released}
                genre={record.genres}
                rating={record.rating}
                img={record.img}
                key={record._id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
