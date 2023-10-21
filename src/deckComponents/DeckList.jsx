/* DeckList: Renders a list of decks belonging to the username found in the URL params. */

import React, { useEffect, useState } from "react";
import DeckCard from "./DeckCard";

export default function DeckList({ decks, title }) {
  return (
    <div className="my-3">
      <h3>{title}</h3>
      {decks.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {decks.map((deck) => (
            <DeckCard deck={deck} key={deck.id} />
          ))}
        </div>
      ) : (
        `No ${title.toLowerCase()} found.`
      )}
    </div>
  );
}
