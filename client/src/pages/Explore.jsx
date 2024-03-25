import { React, useEffect, useState } from "react";
import "../styles/Explore.css";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Explore() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/record")
      .then((response) => response.json())
      .then((data) => setRecords(data));
  }, []);

  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default Explore;
