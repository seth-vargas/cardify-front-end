import React from "react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ title, cards }) {
  return (
    <div>
      <h4 className="mt-5">{title}</h4>
      <div className="row my-3">
        <button className="btn btn-success">Add a card!</button>
      </div>
      <div className="row">
        {cards.map((card) => (
          <FlashCard front={card.front} back={card.back} key={card.id} />
        ))}
      </div>
    </div>
  );
}
