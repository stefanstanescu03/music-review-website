import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accountAtom } from "../App";
import Navbar from "../components/Navbar";
import "../styles/Record.css";

import Review from "../components/Review";
import AccountReview from "../components/AccountReview";
import AddReviewForm from "../components/AddReviewForm";

function Record() {
  const [loggedAccount] = useAtom(accountAtom);
  const navigate = useNavigate();

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

  const shouldReview = () => {
    for (let i = 0; i < rec.reviews.length; i++) {
      if (rec.reviews[i].username === loggedAccount.username) {
        return true;
      }
    }
    return false;
  };

  const handleAddReview = async (content, rating) => {
    if (loggedAccount._id === "-1") {
      navigate("/login");
    } else {
      const newReview = {
        username: loggedAccount.username,
        content: content,
        rating: parseInt(rating),
      };

      console.log(newReview);

      const url = `http://localhost:3000/record/${rec._id}`;
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviews: [...rec.reviews, newReview] }),
      }).then((result) => result.json());

      setRec({
        _id: rec._id,
        name: rec.name,
        artists: rec.artists,
        type: rec.type,
        genres: rec.genres,
        released: rec.released,
        rating: rec.rating,
        description: rec.description,
        img: rec.img,
        reviews: [...rec.reviews, newReview],
      });
    }
  };

  const handleDelete = async () => {
    console.log("delete");
    const newReviews = rec.reviews.filter(
      (review) => review.username != loggedAccount.username
    );

    const url = `http://localhost:3000/record/${rec._id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviews: newReviews }),
    }).then((result) => result.json());

    setRec({
      _id: rec._id,
      name: rec.name,
      artists: rec.artists,
      type: rec.type,
      genres: rec.genres,
      released: rec.released,
      rating: rec.rating,
      description: rec.description,
      img: rec.img,
      reviews: newReviews,
    });
  };

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
          <h1 className="other-info">{rec.type}</h1>
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
        {shouldReview() == false && (
          <AddReviewForm handleAdd={handleAddReview} />
        )}
        {rec.reviews.map((review) => {
          if (review.username === loggedAccount.username) {
            return (
              <AccountReview
                name={review.username}
                content={review.content}
                rating={review.rating}
                key={review._id}
                delete={handleDelete}
              />
            );
          }
        })}
        {rec.reviews.map((review) => {
          if (review.username != loggedAccount.username) {
            return (
              <Review
                name={review.username}
                content={review.content}
                rating={review.rating}
                key={review._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Record;
