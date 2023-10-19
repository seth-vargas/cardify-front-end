/* Renders a form that searches the DB for matching deck names and tag names. */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CardifyApi from "./api";
import DeckList from "./DeckList";
import Loading from "./Loading";

export default function SearchForm() {
  const [decks, setDecks] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (error) {
      console.error(error);
    }
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
      {isLoading ? <Loading /> : <DeckList decks={decks} title={"Matches"} />}
    </div>
  );
}
