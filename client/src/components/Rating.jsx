import React, { useState } from "react";
import "../styles/Rating.css";

function Rating(props) {
  const [currRating, setCurrRating] = useState(0);
  const [saveStatus, setSaveStauts] = useState(false);

  const pickColor = (rating) => {
    if (rating >= 7) return "#37cf18";
    if (rating >= 4 && rating < 7) return "#c79d13";
    if (rating < 4) return "#ee1f1f";
  };

  const mouseOver = (event) => {
    const rating = event.target.id;
    setSaveStauts(false);
    setCurrRating(rating);
    let color = "";
    if (rating >= 7) color = "#37cf18";
    if (rating >= 4 && rating < 7) color = "#c79d13";
    if (rating < 4) color = "#ee1f1f";

    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(i);
      if (i <= rating) {
        element.style.background = color;
      } else {
        element.style.background = "rgb(218, 218, 218)";
      }
    }
  };

  const mouseOut = () => {
    if (!saveStatus) {
      for (let i = 1; i <= 10; i++) {
        const element = document.getElementById(i);
        element.style.background = "rgb(218, 218, 218)";
      }
      setCurrRating(0);
    }
  };

  const handleSave = () => {
    setSaveStauts(true);
    props.rating(currRating);
  };

  return (
    <div className="rating-container">
      <div
        className="rating-rect"
        style={{ backgroundColor: pickColor(currRating) }}
      >
        <h1 className="rating-text">{currRating}</h1>
      </div>
      <div
        className="rating-bar-start"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={1}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={2}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={3}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={4}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={5}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={6}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={7}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={8}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={9}
        onClick={handleSave}
      ></div>
      <div
        className="rating-bar-end"
        onMouseEnter={mouseOver}
        onMouseOut={mouseOut}
        id={10}
        onClick={handleSave}
      ></div>
    </div>
  );
}

export default Rating;
