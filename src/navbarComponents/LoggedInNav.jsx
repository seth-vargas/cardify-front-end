import React from "react";
import SearchForm from "../formComponents/SearchForm";
import { Link } from "react-router-dom";

export default function LoggedInNav({ username }) {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navToggle"
        aria-controls="navToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navToggle">
        <ul className="navbar-nav me-auto ">
          <li className="nav-item">
            <Link to={`/${username}`} className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>
        {/* <SearchForm /> */}
      </div>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            <div
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#newDeckModal"
            >
              <i className="fa-solid fa-circle-plus fa-lg"></i>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <div className="dropdown dropstart">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
              <i className="fa-solid fa-user fa-lg"></i>
            </button>
            <ul className="dropdown-menu">
              <li
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#editUserModal"
              >
                Change my info
              </li>
              <li
                className="dropdown-item text-danger"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
              >
                Log out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}
