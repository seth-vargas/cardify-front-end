/* DeckList: Renders a list of decks belonging to the username found in the URL params. */

import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";

export default function DeckList({ decks, title }) {
  return (
    <div className="my-3">
      <h3>{title}</h3>
      {decks.length > 0 ? (
        <div className="d-flex flex-wrap">
          {decks.map((deck) => (
            <InfoCard deck={deck} key={deck.id} />
          ))}
        </div>
      ) : (
        `No ${title.toLowerCase()} found.`
      )}
    </div>
  );
}
