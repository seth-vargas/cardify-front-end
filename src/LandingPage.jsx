/* 
  This is the first component users will first see when arriving to the app!
  It should: 
    * Provide redirects to either "Log In" or "Sign Up" pages.
*/

import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="jumbotron my-5">
      <h1 className="display-4">Welcome to Cardify, the flashcard app!</h1>
      <p className="lead">This is going to blow your mind.</p>

      <hr className="my-3" />
    </div>
  );
}
