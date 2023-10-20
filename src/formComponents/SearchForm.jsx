/* Renders a form that searches the DB for matching deck names and tag names. */

import React, { useEffect, useState } from "react";
import CardifyApi from "../api";
import DeckList from "../deckComponents/DeckList"; // This is the ONLY line you need to keep if things get totally fucked
import Loading from "../Loading";

export default function SearchForm() {
  const [decks, setDecks] = useState([]);
  const [formState, setFormState] = useState({ searchTerm: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    try {
      setIsLoading(true);
      console.log(searchTerm);
      const result = await CardifyApi.search(searchTerm);
      setDecks(result.decks);
      setIsLoading(false);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  }

  const { searchTerm } = formState;

  return (
    <div className="my-5">
      <h1>Search page</h1>
      <form role="search">
        <div className="d-flex">
          <input
            onChange={handleChange}
            className="form-control me-2"
            name="searchTerm"
            value={searchTerm}
            type="search"
            aria-label="Search"
            id="search-form"
          />
        </div>
      </form>
      {searchTerm !== "" && <DeckList decks={decks} title={"Matches"} />}
      {/* {hasSearched &&
        (isLoading ? (
          <Loading />
        ) : (
          <DeckList decks={decks} title={"Matches"} />
        ))} */}
    </div>
  );
}
