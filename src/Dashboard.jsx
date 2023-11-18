/* Dashboard: Renders all data belonging to the username found in the URL params:
 * The decks they made
 * The decks they favorited
 */

// TODO - Handle 404: User Not Found

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardifyApi from "./api";
import Loading from "./Loading";
import DeckList from "./deckComponents/DeckList";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [decks, setDecks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  const { username } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { user } = await CardifyApi.getUser(username);

        setDecks(user.decks);
        setFavorites(user.favorites);
        setIsLoading(false);
      } catch (error) {
        console.error("error fetching data", error);
        navigate("/404");
      }
    }
    fetchData();
  }, [username]);

  return (
    <div className="my-5">
      <h1>Your Dashboard</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DeckList decks={decks} title="Decks" />
          <DeckList decks={favorites} title="Favorites" />
        </>
      )}
    </div>
  );
}
