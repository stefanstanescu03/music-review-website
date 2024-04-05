import React from "react";

import "../styles/Review.css";

function FeatureReview(props) {
  return (
    <div className="review-container">
      <div className="feature-summary">
        <h1 className="username-text">Review by {props.name}</h1>
      </div>
      <h1 className="content-text">{props.content}</h1>
    </div>
  );
}

export default FeatureReview;
