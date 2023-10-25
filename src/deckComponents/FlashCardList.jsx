import React from "react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ title, cards, username, slug }) {
  return (
    <div className="row">
      <h4 className="mt-5">{title}</h4>
      <div className="row justify-content-center">
        <a
          data-bs-toggle="modal"
          data-bs-target="#createFlashcardModal"
          className="btn btn-outline-success col-lg-4 col-md-8"
        >
          Create a new flashcard!
        </a>
      </div>
      <div className="row justify-content-center my-3">
        {cards.map((card) => (
          <div className="row justify-content-center my-3" key={card.id}>
            <FlashCard front={card.front} back={card.back} />
          </div>
        ))}
      </div>
    </div>
  );
}
