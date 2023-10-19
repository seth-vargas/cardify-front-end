import React from "react";

export default function DeckInfo({ username }) {
  return (
    <div className="d-flex align-items-center justify-content-between my-1">
      <div>
        <small>created by</small>
        <p className="lead">{username}</p>
      </div>
      <button className="btn btn-outline-dark ">
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
    </div>
  );
}
