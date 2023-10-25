import { Routes, Route } from "react-router-dom";

import EditUserForm from "./formComponents/EditUserForm";
import NewUserForm from "./formComponents/NewUserForm";
import Navbar from "./navbarComponents/Navbar";
import LandingPage from "./LandingPage";
import LoginForm from "./formComponents/LoginForm";
import SearchForm from "./formComponents/SearchForm";
import Dashboard from "./Dashboard";
import DeckView from "./deckComponents/DeckView";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import LogoutModal from "./LogoutModal";
import NewDeckModal from "./NewDeckModal";
import EditUserModal from "./EditUserModal";
import useAuth from "./hooks/useAuth";

console.log("Rendering whole app");

function App() {
  return (
    <main>
      <Navbar />
      <LogoutModal />
      <NewDeckModal />
      <EditUserModal />
      <main className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}

            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<NewUserForm />} />
            <Route path="/" element={<LandingPage />} />

            {/* Protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="search" element={<SearchForm />} />
              <Route path="logout" />
              <Route path="/:username" element={<Dashboard />} />
              <Route path="/:username/decks/:deckSlug" element={<DeckView />} />
            </Route>

            {/* Catch all */}

            <Route
              path="/404"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Route>
        </Routes>
      </main>
    </main>
  );
}

export default App;
