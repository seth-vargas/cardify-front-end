import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardifyApi from "../api";
import EditDeckForm from "../formComponents/EditDeckForm";

export default function EditDeckModal({ deck }) {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div
      className="modal fade"
      id="editDeckModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Edit your deck</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <EditDeckForm deck={deck} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
