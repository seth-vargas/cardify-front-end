import React from "react";

export default function SearchForm() {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search something!"
        aria-label="Search"
      />
      <button className="btn btn-outline-dark" type="submit">
        Search
      </button>
    </form>
  );
}