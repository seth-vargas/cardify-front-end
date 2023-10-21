/* Renders a form that searches the DB for matching deck names and tag names. */

import React, { useEffect, useState } from "react";
import CardifyApi from "../api";
import DeckList from "../deckComponents/DeckList";
import Loading from "../Loading";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit({ searchTerm }) {
    try {
      setIsLoading(true);
      const { decks } = await CardifyApi.search(searchTerm);
      setDecks(decks);
      setIsLoading(false);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1>Search page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex">
          <input
            className="form-control me-2"
            name="searchTerm"
            placeholder={
              errors.searchTerm ? "Input is required" : "Search Cardify"
            }
            {...register("searchTerm", { required: true })}
          />
          {errors.searchTerm ? (
            <button className="btn btn-danger" disabled>
              Submit
            </button>
          ) : (
            <button className="btn btn-outline-dark">Submit</button>
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
