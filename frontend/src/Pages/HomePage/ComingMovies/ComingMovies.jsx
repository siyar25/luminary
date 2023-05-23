import React from "react";
import "./ComingMovies.css";

export default function ComingMovies() {
  return (
    <div className="coming-movies-container">
      <section className="coming-movies-section">
        <div className="subtitle">
          <div className="subtitle-text">Opening this week</div>
          <div className="opening-week-search">search</div>
        </div>
        <div className="section-line"></div>
        <div className="coming-movies-grid"></div>
      </section>
    </div>
  );
}
