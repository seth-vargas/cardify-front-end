import axios from "axios";

const BASE_API_URL = "http://localhost:3000/api";

export default class CardifyApi {
  static async getUser(username) {
    const result = await axios.get(`${BASE_API_URL}/users/${username}`);
    return result.data;
  }

  /* GET route for decks
   * Returns list of objects that represent decks
   */

  static async getDecks(username) {
    const result = await axios.get(`${BASE_API_URL}/users/${username}/decks`);
    return result.data;
  }

  static async getCards(username, deckSlug) {
    const result = await axios.get(
      `${BASE_API_URL}/users/${username}/decks/${deckSlug}`
    );

    return result.data;
  }
}
