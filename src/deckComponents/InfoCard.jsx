/* InfoCard: Renders a card that contains relevant information regarding a specific deck. */

import React, { useState } from "react";
import TagList from "./TagList";

export default function InfoCard({ deck }) {
  return (
    <div className="card me-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{deck.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Made by {deck.username}
        </h6>
        <TagList tags={deck.tags} />
        <a
          href={`/${deck.username}/decks/${deck.slug}`}
          className="btn btn-dark"
        >
          Open Deck
        </a>
      </div>
    </div>
  );
}
