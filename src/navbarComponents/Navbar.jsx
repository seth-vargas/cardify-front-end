import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

export default function Navbar({ username }) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm bg-white border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Cardify
        </a>

        {username ? <LoggedInNav username={username} /> : <LoggedOutNav />}
      </div>
    </nav>
  );
}
