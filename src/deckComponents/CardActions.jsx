import React from "react";

export default function CardActions() {
  return (
    <span className="d-flex justify-content-apart">
      <a href="#" className="me-3 btn btn-primary">
        Edit deck
      </a>
      <a href="#" className="btn btn-danger">
        Delete deck
      </a>
    </span>
  );
}
