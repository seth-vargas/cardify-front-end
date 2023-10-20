/* InfoCard: Renders a card that contains relevant information regarding a specific deck. */

import React, { useState } from "react";
import TagList from "./TagList";

export default function InfoCard({ deck }) {
  return (
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card h-100 ">
        <div className="card-body">
          <h5 className="card-title">{deck.title}</h5>
          <p className="card-text">
            {deck.tags.length !== 0 && <TagList tags={deck.tags} />}
          </p>
        </div>
        <div className="mt-4">
          <div className="card-footer">
            <small className="text-body-secondary">
              Made by {deck.username}
            </small>
          </div>
        </div>
        <a
          href={`/${deck.username}/decks/${deck.slug}`}
          className="stretched-link"
        ></a>
      </div>
    </div>
  );
}
