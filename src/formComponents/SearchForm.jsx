/* Renders a form that searches the DB for matching deck names and tag names. */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CardifyApi from "../api";
import DeckList from "../deck/DeckList";
import Loading from "../Loading";

export default function SearchForm() {
  const [decks, setDecks] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const { searchTerm } = data;
      setIsLoading(true);
      const result = await CardifyApi.search(searchTerm);
      setDecks(result.decks);
      setIsLoading(false);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1>Search page</h1>
      <form role="search" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex">
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

          {isLoading ? (
            <button className="btn btn-light" disabled>
              Search
            </button>
          ) : (
            <button
              className={
                errors.searchTerm ? "btn btn-danger" : "btn btn-outline-light"
              }
              type="submit"
            >
              Search
            </button>
          )}
        </div>
      </form>

      {hasSearched &&
        (isLoading ? (
          <Loading />
        ) : (
          <DeckList decks={decks} title={"Matches"} />
        ))}
    </div>
  );
}
