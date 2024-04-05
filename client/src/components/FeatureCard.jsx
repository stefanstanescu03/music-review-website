import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FeatureCard.css";

import FeatureReview from "./FeatureReview";

function FeatureCard(props) {
  const navigate = useNavigate();
  return (
    <div className="feature-card-container">
      <img
        src={`http://localhost:3000/image/${props.img}`}
        alt="default"
        className="full-img"
      />
      <div className="right-infos-container">
        <button
          className="title-text"
          onClick={() => navigate(`/record/${props._id}`)}
        >
          {props.name}
        </button>
        <h1 className="artist-text">
          {props.artist.map((artist, index) =>
            index != props.artist.length - 1 ? artist + ", " : artist
          )}
        </h1>
        <FeatureReview
          name={props.review.username}
          content={props.review.content}
          rating={props.review.rating}
          key={props.review._id}
        />
      </div>
    </div>
  );
}

export default FeatureCard;
