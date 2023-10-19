/* DeckList: Renders a list of decks belonging to the username found in the URL params. */

import React, { useEffect, useState } from "react";
import Deck from "./Deck";

export default function DeckList({ decks, title }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {});
  return (
    <div className="my-3">
      <h3>Your {title}</h3>
      {decks.length > 0 ? (
        <div className="d-flex flex-wrap">
          {decks.map((deck) => (
            <Deck deck={deck} key={deck.id} />
          ))}
        </div>
      ) : (
        <p>Nothing here yet!</p>
      )}
    </div>
  );
}
