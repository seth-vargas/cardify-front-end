import React from "react";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";

export default function DeleteDeckModal({ deck }) {
  const { username } = useParams();
  const history = useHistory();

  async function deleteDeck() {
    await CardifyApi.deleteDeck(deck.id);
    history.push(`/${username}`);
  }

  return (
    <div
      className="modal fade"
      id="confirmDeleteModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Delete your deck
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">Are you sure you want to delete this deck?</p>
            <b>You will lose all of the flashcards this deck has as well.</b>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={deleteDeck}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
