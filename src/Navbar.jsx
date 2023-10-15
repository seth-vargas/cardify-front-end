import React from "react";
import userLogo from "./assets/user.svg";
import searchLogo from "./assets/magnifying-glass.svg";
import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Cardify
        </a>
        {/* <img src={searchLogo} alt="" /> */}
        <SearchForm />
        {/* TODO: Handle user logged in status. isLoggedIn ? show user : show login/signup buttons  */}
        {/* <img src={userLogo} alt="" /> */}
        <div>
          <a href="/login" className="btn btn-primary me-2">
            Log in
          </a>
          <a href="/signup" className="btn btn-secondary">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
