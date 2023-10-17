import React from "react";

export default function LoggedOutNav() {
  return (
    <div>
      <a href="/login" className="btn btn-primary me-1">
        Log In
      </a>
      <a href="/signup" className="btn btn-secondary">
        Sign Up
      </a>
    </div>
  );
}
