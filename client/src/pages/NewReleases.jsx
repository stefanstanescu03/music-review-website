import { React, useEffect, useState } from "react";
import "../styles/Explore.css";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

function NewReleases() {
  const [records, setRecords] = useState([]);

  const date = new Date().getFullYear();

  useEffect(() => {
    fetch(`http://localhost:3000/record/year/${date}`)
      .then((response) => response.json())
      .then((data) => setRecords(data));
  }, []);

  return (
    <div>
      <Navbar />
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

export default NewReleases;
