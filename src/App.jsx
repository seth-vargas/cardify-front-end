/* This component handles the routing and determines what other components are rendered. */

import Navbar from "./navbarComponents/Navbar";
import LandingPage from "./LandingPage";
import LoginForm from "./formComponents/LoginForm";
import SearchForm from "./formComponents/SearchForm";
import NewDeckForm from "./formComponents/NewDeckForm";
import Homepage from "./Homepage";
import CardList from "./deckComponents/CardList";

import { Switch, Route } from "react-router-dom";
import NewUserForm from "./formComponents/NewUserForm";
const user = { username: "user1" };

function App() {
  return (
    <div>
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
            <NewUserForm />
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
            <NewDeckForm />
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
