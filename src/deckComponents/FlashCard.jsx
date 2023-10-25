/* FlashCard: Renders a card with relevant information from a users deck */

import { useState, useEffect, useRef } from "react";
import "./FlashCard.css";

export default function FlashCard({ front, back }) {
  // return (
  //   <div className="card shadow-sm col-6 m-2">
  //     <div className="card-body">
  //       <h5 className="card-title">{front}</h5>
  //       <p>{back}</p>
  //     </div>
  //   </div>
  // );
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 200));
  }

  useEffect(setMaxHeight, [front, back]);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <div
      className={`card ${
        flip ? "flip" : ""
      }  col-lg-4 col-md-8 row text-center`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {front}
      </div>
      <div className="back" ref={backEl}>
        {back}
      </div>
    </div>
  );
}
