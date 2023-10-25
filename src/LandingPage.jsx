/* 
  This is the first component users will first see when arriving to the app!
  It should: 
    * Provide redirects to either "Log In" or "Sign Up" pages.
*/

import React from "react";
import { Link } from "react-router-dom";
import { getUsername } from "./helpers";

export default function LandingPage() {
  let username = getUsername();

  return (
    <div className="jumbotron my-5">
      <h1 className="display-1">Welcome to Cardify, the flashcard app!</h1>
      <p className="lead">This is going to blow your mind.</p>

      <hr className="my-3" />
      {username ? (
        ""
      ) : (
        <div>
          <Link className="btn btn-primary me-2" to="/login">
            Log in
          </Link>
          <Link className="btn btn-secondary" to="/signup">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
