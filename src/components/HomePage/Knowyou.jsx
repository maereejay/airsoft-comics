import React from "react";
import "./Knowyou.css";

export default function Knowyou() {
  const handleClick = () => {
    window.open("https://tally.so/r/mJaZzr", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="gky-section">
      <div className="gky-container">
        <h2 className="gky-title">Let’s get to know you...</h2>

        <p className="gky-description">
          Before we begin, we’d love to understand your goals and what you’re
          looking to achieve. This short form helps us tailor our service to
          people who are ready to move forward, ensuring you get the
          best possible experience from the start.
        </p>

        <button className="gky-button" onClick={handleClick}>
          Start the Quick Form →
        </button>
      </div>
    </section>
  );
}