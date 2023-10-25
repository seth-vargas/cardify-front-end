import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getUsername } from "../helpers";

export default function Navbar() {
  const { auth } = useAuth();

  let username = getUsername();

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
