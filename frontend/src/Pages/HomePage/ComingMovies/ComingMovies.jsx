import React from "react";
import "./ComingMovies.css";

export default function ComingMovies() {
  return (
    <div className="coming-movies-container">
      <section className="coming-movies-section">
        <div className="subtitle">
          <div className="subtitle-text">Opening this week</div>
          <input className="opening-week-search" type="search" placeholder="Search..." />
        </div>
        <div className="section-line"></div>
        <ul className="coming-movies-types">
          <li className="movie-type">All films</li>
          <li className="movie-type">2D</li>
          <li className="movie-type">3D</li>
          <li className="movie-type">IMAX</li>
          <li className="movie-type">IMAX 3D</li>
        </ul>
        <div className="coming-movies-grid"></div>
      </section>
    </div>
  );
}
