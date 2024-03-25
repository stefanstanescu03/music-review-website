import React from "react";

import "../styles/Review.css";

function Review(props) {
  const pickColor = (rating) => {
    if (rating >= 7) return "#37cf18";
    if (rating >= 4 && rating < 7) return "#c79d13";
    if (rating < 4) return "#ee1f1f";
  };

  return (
    <div className="review-container">
      <div className="summary-container">
        <h1 className="username-text">{props.name}</h1>
        <div
          className="rating-rect"
          style={{ backgroundColor: pickColor(props.rating) }}
        >
          <h1 className="rating-text">{Math.trunc(props.rating * 10) / 10}</h1>
        </div>
      </div>
      <h1 className="content-text">{props.content}</h1>
    </div>
  );
}

export default Review;
