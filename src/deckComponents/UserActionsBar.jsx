import React from "react";

export default function UserActionsBar({ username }) {
  return (
    <div className="d-flex align-items-center justify-content-between my-1">
      <div>
        <small>created by</small>
        <p className="lead">{username}</p>
      </div>
      <div>
        <button className="btn btn-outline-dark me-1">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button className="btn btn-outline-danger ">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
