/* DeckList: Renders a list of decks belonging to the username found in the URL params. */

import React from "react";
import Deck from "./Deck";

export default function DeckList({ decks, title }) {
  return (
    <div className="my-3">
      <h3>{title}</h3>
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
