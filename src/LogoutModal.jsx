import React from "react";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    // remove items from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // set auth to nothing
    setAuth("");
    // navigate user to landing page
    navigate("/");
  }

  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Log out</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <b>Are you sure you want to log out?</b>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={handleLogout}
              data-bs-dismiss="modal"
            >
              Yes, logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
