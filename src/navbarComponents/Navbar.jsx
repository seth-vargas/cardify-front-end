import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import { Link } from "react-router-dom";
export default function Navbar({ username }) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm bg-white border-bottom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Cardify
        </Link>

        {username ? <LoggedInNav username={username} /> : <LoggedOutNav />}
      </div>
    </nav>
  );
}
