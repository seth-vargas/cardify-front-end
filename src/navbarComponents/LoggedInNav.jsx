import React from "react";
import SearchForm from "../forms/SearchForm";

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
            <a className="nav-link" aria-current="page" href={`/${username}`}>
              Homepage
            </a>
          </li>
        </ul>
        {/* <SearchForm /> */}
      </div>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/search">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href={`/${username}/decks/create`}
          >
            <i className="fa-solid fa-circle-plus fa-lg"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/my-account">
            <i className="fa-solid fa-user fa-lg"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
