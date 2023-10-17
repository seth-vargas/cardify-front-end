import React from "react";

export default function Loading() {
  return (
    <div className="d-flex align-items-center m-5">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  );
}
