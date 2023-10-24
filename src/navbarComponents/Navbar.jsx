import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { auth } = useAuth();

  let username;

  if (localStorage.getItem("user")) {
    username = JSON.parse(localStorage.getItem("user")).username;
  } else if (auth?.user) {
    username = auth.user.username;
  }

  console.log(username);

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
