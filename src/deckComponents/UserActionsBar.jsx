import React from "react";
import { useParams } from "react-router-dom";

export default function UserActionsBar({ username }) {
  const { deckSlug } = useParams();
  return (
    <div className="d-flex align-items-center justify-content-between my-1">
      <div>
        <small>created by</small>
        <p className="lead">{username}</p>
      </div>
      <div>
        <a
          data-bs-toggle="modal"
          data-bs-target="#editDeckModal"
          className="btn btn-outline-dark me-1"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </a>
        <a
          className="btn btn-outline-danger"
          data-bs-toggle="modal"
          data-bs-target="#confirmDeleteModal"
        >
          <i className="fa-regular fa-trash-can"></i>
        </a>
      </div>
    </div>
  );
}
