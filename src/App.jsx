/* This component handles the routing and determines what other components are rendered. */

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import Homepage from "./Homepage";
import CardList from "./CardList";

import { Switch, Route } from "react-router-dom";
import SearchForm from "./SearchForm";
const user = { username: "seth" };

function App() {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <Navbar username={user.username} />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <form>Sign up form</form>
          </Route>

          <Route exact path="/search">
            <SearchForm />
          </Route>

          <Route exact path="/my-account">
            <div>Your account info</div>
          </Route>

          <Route exact path="/:username">
            <Homepage />
          </Route>

          <Route exact path="/:username/decks/create">
            <form>New Deck Form</form>
          </Route>

          <Route exact path="/:username/decks/:deckSlug">
            <CardList />
          </Route>

          <Route exact path="*">
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
