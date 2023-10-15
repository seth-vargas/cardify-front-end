/* FlashCard: Renders a card with relevant information from a users deck */

import React from "react";

export default function FlashCard({ card }) {
  return (
    <div className="card me-3 mb-3" style={{ height: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{card.front}</h5>
        <p>{card.back}</p>
      </div>
    </div>
  );
}
