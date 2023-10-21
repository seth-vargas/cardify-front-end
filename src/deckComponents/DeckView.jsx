/* DeckView: Renders a list of cards belonging to the username found in the URL params. */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardifyApi from "../api";
import FlashCard from "./FlashCard";
import Loading from "../Loading";
import TagList from "./TagList";
import FlashCardList from "./FlashCardList";
import UserActionsBar from "./UserActionsBar";

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
      <div>
        <h1>{deck.title}</h1>
        <TagList tags={deck.tags} />
        <hr />
        <UserActionsBar username={username} />
      </div>
      <FlashCardList
        title="Cards in this deck"
        cards={deck.cards}
        username={username}
        slug={deck.slug}
      />
    </div>
  );
}
