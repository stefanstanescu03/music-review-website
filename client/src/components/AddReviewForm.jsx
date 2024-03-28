import React, { useState } from "react";

import Rating from "./Rating";
import "../styles/AddReviewForm.css";

function AddReviewForm(props) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const getNumRows = () => {
    let num = 1;
    Array.from(content).forEach((ch) =>
      ch === "\n" ? (num += 1) : (num += 0)
    );
    return num;
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const getRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="add-review-form">
      <div className="top-container">
        <h1 className="write-text">Write a review</h1>
        <Rating rating={getRating} />
      </div>
      <div className="textarea-container">
        <textarea
          cols="100"
          rows={getNumRows()}
          className="input-area"
          onChange={handleChange}
        />
        <button
          className="signin-btn"
          onClick={() => props.handleAdd(content, rating)}
        >
          PUBLISH
        </button>
      </div>
    </div>
  );
}

export default AddReviewForm;
