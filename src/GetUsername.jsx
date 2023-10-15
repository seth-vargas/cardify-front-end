/* Renders a form to gather the username from a user. First step of logging in, precedes the password form. */
// TODO - The whole thing needs to be implemented right now.
import React from "react";

export default function Login() {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="nf" className="form-label">
            Enter your username
          </label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up for one!</a>
      </p>
    </>
  );
}
