/* This component handles the routing and determines what other components are rendered. */

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Form from "./GetUsername";
import Homepage from "./Homepage";
import CardList from "./CardList";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Form />
          </Route>

          <Route exact path="/u/:username">
            <Homepage />
          </Route>

          <Route exact path="/u/:username/decks/:deckSlug">
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
