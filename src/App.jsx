/* This component handles the routing and determines what other components are rendered. */

import Navbar from "./navbarComponents/Navbar";
import LandingPage from "./LandingPage";
import LoginForm from "./formComponents/LoginForm";
import SearchForm from "./formComponents/SearchForm";
import NewDeckForm from "./formComponents/NewDeckForm";
import Dashboard from "./Dashboard";
import DeckView from "./deckComponents/DeckView";

import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import NewUserForm from "./formComponents/NewUserForm";
import NewFlashcardForm from "./formComponents/NewFlashcardForm";

// const user = { username: "sethvargas" };

function App() {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();

  console.log(token, username);

  return (
    <div>
      <Navbar username={username} />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginForm setToken={setToken} setUsername={setUsername} />
          </Route>

          <Route exact path="/signup">
            <NewUserForm />
          </Route>

          <Route exact path="/search">
            <SearchForm />
          </Route>

          <Route exact path="/my-account">
            <div>Your account info</div>
          </Route>

          <Route exact path="/:username">
            <Dashboard />
          </Route>

          <Route exact path="/:username/decks/create">
            <NewDeckForm />
          </Route>

          <Route exact path="/:username/decks/:deckSlug">
            <DeckView />
          </Route>

          <Route exact path="/:username/decks/:deckSlug/new-card">
            <NewFlashcardForm />
          </Route>

          <Route exact path="/404">
            <>
              <h1>Sorry, we couldn't find that :(</h1>
            </>
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
