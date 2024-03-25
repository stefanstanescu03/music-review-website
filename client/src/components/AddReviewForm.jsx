import React from "react";

function AddReviewForm() {
  return (
    <div>
      <h1>Review record</h1>
      <input type="number" min="0" max="100" />
      <textarea cols="100" rows="2" className="textarea-container" />
      <button>PUBLISH</button>
    </div>
  );
}

export default AddReviewForm;
