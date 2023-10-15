/* 
  This is the first component users will first see when arriving to the app!
  It should: 
    * Provide redirects to either "Log In" or "Sign Up" pages.
*/

import React from "react";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Cardify!</h1>
      <div className="jumbotron">
        <div>
          <a href="/login" className="btn btn-primary">
            Log in
          </a>
        </div>
        <div>
          <a href="/signup" className="btn btn-secondary">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
