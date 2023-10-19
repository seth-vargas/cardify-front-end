/* FlashCard: Renders a card with relevant information from a users deck */

import React from "react";

export default function FlashCard({ front, back }) {
  return (
    <div className="card me-3 mb-3" style={{ height: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{front}</h5>
        <p>{back}</p>
      </div>
    </div>
  );
}
