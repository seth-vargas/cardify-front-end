import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOutNav() {
  return (
    <div>
      <Link className="btn btn-primary me-1" to="/login">
        Log In
      </Link>
      <Link to="/signup" className="btn btn-secondary">
        Sign Up
      </Link>
    </div>
  );
}
