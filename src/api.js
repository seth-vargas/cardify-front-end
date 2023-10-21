import axios from "axios";

const BASE_API_URL = "http://localhost:3000/api";

export default class CardifyApi {
  static async login(data) {
    console.log(`Logging ${username} in`);
    console.log("data: ", data);
  }

  static async createUser({ username, password }) {
    console.log("Creating new user");
  }

  static async getUser(username) {
    const result = await axios.get(`${BASE_API_URL}/users/${username}`);
    return result.data;
  }

  static async createDeck(data) {
    const result = await axios.post(`${BASE_API_URL}/decks`, data);
    return result.data;
  }

  /* GET route for decks
   * Returns list of objects that represent decks
   */

  static async getDecks(username) {
    const result = await axios.get(
      `${BASE_API_URL}/decks?username=${username}`
    );
    return result.data;
  }

  /* Search for decks based on user input
   * Returns list of decks where deckName ILIKE input AND tagName IS input
   */

  static async search(searchTerm, orderBy = "title") {
    const result = await axios.get(
      `${BASE_API_URL}/decks?term=${searchTerm}&isPublic=true&orderBy=${orderBy}`
    );
    return result.data;
  }

  static async createFlashcard(data) {
    console.log("Creating new flashcard");
    console.log("data: ", data);
  }

  static async getCards(username, deckSlug) {
    const result = await axios.get(
      `${BASE_API_URL}/decks/${deckSlug}?username=${username}`
    );

    return result.data;
  }
}
