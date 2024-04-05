import { React, useState, useEffect } from "react";
import { useAtom } from "jotai";
import { accountAtom } from "../App";
import "../styles/Home.css";

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

function Home() {
  const [account] = useAtom(accountAtom);

  const [records, setRecords] = useState([]);

  const date = new Date().getFullYear();

  const shuffle = (array) => {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  useEffect(() => {
    fetch(`http://localhost:3000/record/year/${date}`)
      .then((response) => response.json())
      .then((data) => setRecords(shuffle(data)));
  }, []);

  return (
    <div>
      <Navbar />
      {records.message === "Record not found" ? (
        <h1 className="no-records-text">No records found</h1>
      ) : (
        <div className="feature-cards-container">
          {records.map((record, index) => {
            if (index < 3) {
              return (
                <FeatureCard
                  _id={record._id}
                  name={record.name}
                  artist={record.artists}
                  released={record.released}
                  genre={record.genres}
                  rating={record.rating}
                  img={record.img}
                  key={record._id}
                  review={record.reviews[0]}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
