import React from "react";
import "../styles/Card.css";

function Card(props) {
  const pickColor = (rating) => {
    if (rating >= 7) return "#37cf18";
    if (rating >= 4 && rating < 7) return "#c79d13";
    if (rating < 4) return "#ee1f1f";
  };

  return (
    <div className="card-container">
      <div className="left-side">
        <img
          src={`http://localhost:3000/image/${props.img}`}
          alt="default"
          className="minimized-img"
        />
        <div className="left-infos">
          <button className="title-text">{props.name}</button>
          <h1 className="subtitle-text">
            {props.artist.map((artist, index) =>
              index != props.artist.length - 1 ? artist + ", " : artist
            )}
          </h1>
          <h1 className="subtitle-text">{props.released}</h1>
          <h1 className="subtitle-text">
            {props.genre.map((genre, index) =>
              index != props.genre.length - 1 ? genre + ", " : genre
            )}
          </h1>
        </div>
      </div>
      <div
        className="rating-rect"
        style={{ backgroundColor: pickColor(props.rating) }}
      >
        <h1 className="rating-text">{Math.trunc(props.rating * 10) / 10}</h1>
      </div>
    </div>
  );
}

export default Card;
