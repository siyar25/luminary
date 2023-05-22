import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import movieBG from "../../../assets/venom-movie-bg.jpg";
import "./MainScreen.css";

export default function MainScreen() {
  return (
    <div className="container">
      <NavBar />
      <img alt="movie-poster" src={movieBG} className="mainscreen-bg" />
      <div className="movie-container">
        <div className="left-side">
          <div className="movie-title">Venom</div>
          <div className="booking">
            <div className="book-now-btn">Book Now</div>
            <div className="book-now-info">
              <div className="book-now-date">2023 May 22.</div>
              <div className="book-now-movietype">IMAX 3D</div>
            </div>
          </div>
            <ul className="social-media">
              <li className="social-app">f</li>
              <li className="social-app">🐦</li>
              <li className="social-app">📷</li>
            </ul>
        </div>
        <div className="right-side">
          <div className="play-button">▶</div>
          <div className="trailer-btn">Watch Trailer</div>
          <div className="pagination">⬅ 1 <span style={{fontSize:"4rem", color:"var(--vivid-gold)"}}><b>2</b></span> 3 4 5 6 ➡</div>
        </div>
      </div>
    </div>
  );
}
