import React from "react";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";
import EditDeckForm from "../formComponents/EditDeckForm";
import NewFlashcardForm from "../formComponents/NewFlashcardForm";

export default function CreateFlashcardModal() {
  const { username } = useParams();
  const history = useHistory();

  async function editDeck() {
    await CardifyApi.editDeck(deck.id);
  }

  return (
    <div
      className="modal fade"
      id="createFlashcardModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Create a flashcard
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <NewFlashcardForm />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={editDeck}
            >
              Create card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
