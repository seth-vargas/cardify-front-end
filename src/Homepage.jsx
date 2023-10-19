/* Homepage: Renders all data belonging to the username found in the URL params:
 * The decks they made
 * The decks they favorited
 */

// TODO - Handle 404: User Not Found

import { useEffect, useState } from "react";
import DeckList from "./DeckList";
import slugify from "react-slugify";
import { useParams } from "react-router-dom";
import CardifyApi from "./api";
import Loading from "./Loading";

export default function Homepage() {
  const { username } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [decks, setDecks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { user } = await CardifyApi.getUser(username);

        setDecks(user.decks);
        setFavorites(user.favorites);
        setIsLoading(false);
      } catch (error) {
        console.error("error fetching data", error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-5">
      <h1>Homepage</h1>
      <DeckList decks={decks} title="Decks" />
      <DeckList decks={favorites} title="Favorites" />
    </div>
  );
}
