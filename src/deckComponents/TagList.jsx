import React from "react";

export default function TagList({ tags }) {
  return (
    <span>
      {tags.map((tagname) => (
        <span key={tagname} className="badge text-bg-info bg-opacity-50">
          {tagname}
        </span>
      ))}
    </span>
  );
}
