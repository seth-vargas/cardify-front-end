/* 
  This is the first component users will first see when arriving to the app!
  It should: 
    * Provide redirects to either "Log In" or "Sign Up" pages.
*/

import React from "react";

export default function LandingPage() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to Cardify, the flashcard app!</h1>
      <p className="lead">This is going to blow your mind.</p>

      <hr className="my-4" />
      <a href="/login" className="btn btn-primary me-4">
        Login
      </a>
      <a href="/signup" className="btn btn-secondary">
        Sign Up
      </a>
    </div>
  );
}
