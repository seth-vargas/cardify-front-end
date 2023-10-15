/* CardList: Renders a list of cards belonging to the username found in the URL params. */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardifyApi from "./api";
import FlashCard from "./FlashCard";

export default function CardList() {
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
    return <p>Loading &hellip;</p>;
  }

  return (
    <div>
      <h1>{deck.title}</h1>
      <h3>Made by {username}</h3>
      <div className="d-flex flex-column">
        {cards.map((card) => (
          <FlashCard card={card} />
        ))}
      </div>
    </div>
  );
}
