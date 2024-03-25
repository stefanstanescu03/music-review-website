import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Record.css";

import Review from "../components/Review";
import AddReviewForm from "../components/AddReviewForm";

function Record() {
  const path = useLocation();

  const pickColor = (rating) => {
    if (rating >= 7) return "#37cf18";
    if (rating >= 4 && rating < 7) return "#c79d13";
    if (rating < 4) return "#ee1f1f";
  };

  const [rec, setRec] = useState({
    _id: "",
    name: "",
    artists: [],
    type: "",
    genres: [],
    released: "",
    rating: 0,
    description: [],
    reviews: [],
  });

  useEffect(() => {
    fetch(`http://localhost:3000${path.pathname}`)
      .then((response) => response.json())
      .then((data) => setRec(data));
  }, []);

  return (
    <div className="record-page">
      <Navbar />
      <div className="record-container">
        <img
          src={`http://localhost:3000/image/${rec.img}`}
          alt="default"
          className="full-img"
        />
        <div className="infos-container-full">
          <h1 className="record-title">{rec.name}</h1>
          <h1 className="other-info">
            {rec.artists.map((artist, index) =>
              index != rec.artists.length - 1 ? artist + ", " : artist
            )}
          </h1>
          <h1 className="other-info">{rec.released}</h1>
          <h1 className="other-info">
            {rec.genres.map((genre, index) =>
              index != rec.genres.length - 1 ? genre + ", " : genre
            )}
          </h1>
          <h1 className="other-info">
            {rec.description.map((desc, index) =>
              index != rec.description.length - 1 ? desc + ", " : desc
            )}
          </h1>
          <div
            className="rating-rect"
            style={{ backgroundColor: pickColor(rec.rating) }}
          >
            <h1 className="rating-text">{Math.trunc(rec.rating * 10) / 10}</h1>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <AddReviewForm />
        {rec.reviews.map((review) => {
          return (
            <Review
              name={review.username}
              content={review.content}
              rating={review.rating}
              key={review._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Record;
