import axios from "axios";

const BASE_API_URL = "http://localhost:3000";

export default class CardifyApi {
  /* Log user in
   * returns a token
   */

  static async login(data) {
    try {
      const result = await axios.post(`${BASE_API_URL}/auth/token`, data);
      return result.data;
    } catch (error) {
      console.log(error);
      return "User not authorized";
    }
  }

  /* Create new user in db */

  static async createUser(data) {
    console.log("Creating new user"); // TODO: DELETE BEFORE SUBMITTING
    console.log("data: ", data); // TODO: DELETE BEFORE SUBMITTING

    const result = await axios.post(`${BASE_API_URL}/users`, data);
    return result.data;
  }

  /* Grab user data from db */

  static async getUser(username) {
    const result = await axios.get(`${BASE_API_URL}/users/${username}`);
    return result.data;
  }

  /* Create new deck in db */

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

  /* Change deck info in db */

  static async editDeck(data) {
    console.log(data);
    console.log("Editing...");
  }

  /* Remove deck from db using deck ID */

  static async deleteDeck(deckId) {
    console.log("Deleting...");
    const result = await axios.delete(`${BASE_API_URL}/decks/${deckId}`);
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

  /* Create new flashcard in db */

  static async createFlashcard(data) {
    console.log("Creating new flashcard"); // TODO: DELETE BEFORE SUBMITTING
    console.log("data: ", data); // TODO: DELETE BEFORE SUBMITTING

    const result = await axios.post(
      `${BASE_API_URL}/decks/${data.slug}/cards`,
      data
    );

    return result.data;
  }

  /* Get list of cards from db */

  static async getCards(username, deckSlug) {
    const result = await axios.get(
      `${BASE_API_URL}/decks/${deckSlug}?username=${username}`
    );

    return result.data;
  }

  static async favorite(username, ownerUsername, deckSlug) {
    console.log(`Adding ${deckSlug} to ${username}'s favorites.`);
  }

  static async unfavorite(username, ownerUsername, deckSlug) {
    console.log(`Removing ${deckSlug} from ${username}'s favorites.`);
  }
}
