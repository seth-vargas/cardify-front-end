/* DeckView: Renders a list of cards belonging to the username found in the URL params. */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardifyApi from "../api";
import FlashCard from "./FlashCard";
import Loading from "../Loading";
import TagList from "./TagList";
import FlashCardList from "./FlashCardList";
import UserActionsBar from "./UserActionsBar";
import DeleteDeckModal from "./DeleteDeckModal";
import EditDeckModal from "./EditDeckModal";
import CreateFlashcardModal from "./CreateFlashcardModal";

export default function DeckView() {
  const { username, deckSlug } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function fetchData(username, deckSlug) {
      try {
        const { deck } = await CardifyApi.getCards(username, deckSlug);

        setCards(deck.cards);
        setDeck(deck);
        setIsLoading(false);
      } catch (error) {
        console.error("error fetching data", error);
      }
    }
    fetchData(username, deckSlug);
  }, [username]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-5">
      <DeleteDeckModal deck={deck} />
      <EditDeckModal deck={deck} />
      <CreateFlashcardModal deck={deck} cards={cards} setCards={setCards} />

      <div className="row align-items-center">
        <div className="col">
          <h1>{deck.title}</h1>
        </div>
        <div className="col">
          <UserActionsBar deck={deck} />
        </div>
      </div>

      <TagList tags={deck.tags} />

      {/* This is where the carousel would go! */}

      <hr />

      <div className="row text-bg-light rounded p-3 align-items-center">
        <strong>
          Created by{" "}
          <a href={`/${username}`} className="text-decoration-none">
            {username}
          </a>
        </strong>

        <div className="row mt-3">
          <dt>Description:</dt>
          <dd>{deck.description}</dd>
        </div>
      </div>

      <FlashCardList
        title="Cards in this deck"
        cards={cards}
        username={username}
        slug={deck.slug}
      />
    </div>
  );
}
