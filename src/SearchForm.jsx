/* Renders a form that searches the DB for matching deck names and tag names. */

import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { username, password } = data;
    console.log(username, password);
  }

  return (
    <div className="my-5">
      <form className="d-flex" role="search" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control me-2"
          type="search"
          placeholder={
            errors.searchTerm ? "Input required" : "Search for a deck"
          }
          aria-label="Search"
          id="search-form"
          {...register("searchTerm", { required: true })}
        />
        <button
          className={
            errors.searchTerm ? "btn btn-danger" : "btn btn-outline-dark"
          }
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
