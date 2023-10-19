import React from "react";

export default function TagList({ tags }) {
  return (
    <div className="my-1">
      {tags.map((tagname) => (
        <a
          key={tagname}
          href={`/decks/tags/${tagname}`}
          className="badge rounded-pill text-bg-info"
        >
          {tagname}
        </a>
      ))}
    </div>
  );
}
