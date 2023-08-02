import movieBG from "../../../assets/venom-movie-bg.jpg";
import screen2 from "../../../assets/posters/screen-2.jpg";
import screen3 from "../../../assets/posters/screen-3.jpg";
import screen4 from "../../../assets/posters/screen-4.jpg";
import screen5 from "../../../assets/posters/screen-5.jpg";
import venomLogo from "../../../assets/Venom-Logo.png";
import fbIcon from "../../../assets/social-media/facebook-icon.png";
import twitterIcon from "../../../assets/social-media/twitter-icon.png";
import instagramIcon from "../../../assets/social-media/instagram-icon.png";
import "./MainScreen.css";
import TrailerModal from "../../../Components/TrailerModal/TrailerModal";
import { useState } from "react";

export default function MainScreen() {
  const [activeMovie, setActiveMovie] = useState(1);

  function handleTrailer() {
    const trailerModal = document.getElementById("trailer-modal");
    trailerModal.showModal();
  }

  function handlePagination(e) {
    setActiveMovie(parseInt(e.target.id.slice(-1)));
  }

  function handleArrows(direction) {
    switch (direction) {
      case "left":
        activeMovie === 1
          ? setActiveMovie(5)
          : setActiveMovie((prev) => prev - 1);
        break;

      case "right":
        activeMovie === 5
          ? setActiveMovie(1)
          : setActiveMovie((prev) => prev + 1);
        break;
    }
  }

  return (
    <div className="container">
      <TrailerModal />
      <div className="slides">
        <div id="slide-1" style={{ display: activeMovie === 1 ? "" : "none" }}>
          <img alt="movie-poster" src={movieBG} className="mainscreen-bg" />
        </div>
        <div id="slide-2" style={{ display: activeMovie === 2 ? "" : "none" }}>
          <img alt="movie-poster" src={screen2} className="mainscreen-bg" />
        </div>
        <div id="slide-3" style={{ display: activeMovie === 3 ? "" : "none" }}>
          <img alt="movie-poster" src={screen3} className="mainscreen-bg" />
        </div>
        <div id="slide-4" style={{ display: activeMovie === 4 ? "" : "none" }}>
          <img alt="movie-poster" src={screen4} className="mainscreen-bg" />
        </div>
        <div id="slide-5" style={{ display: activeMovie === 5 ? "" : "none" }}>
          <img alt="movie-poster" src={screen5} className="mainscreen-bg" />
        </div>
      </div>
      <div className="movie-container">
        <div className="left-side">
          <img
            className="movie-title-logo"
            src={venomLogo}
            style={{ visibility: activeMovie === 1 ? "" : "hidden" }}
          />
          <div className="booking">
            <div className="book-now-btn">Book Now</div>
            <div className="book-now-info">
              <div className="book-now-date">2023 May 22.</div>
              <div className="book-now-movietype">IMAX 3D</div>
            </div>
          </div>
          <div className="social-media">
            <img alt="facebook icon" src={fbIcon} className="social-app" />
            <img alt="twitter icon" src={twitterIcon} className="social-app" />
            <img
              alt="instagram icon"
              src={instagramIcon}
              className="social-app"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="play-trailer">
            <div className="play-button" onClick={() => handleTrailer()}>
              ▶
            </div>
            <div className="trailer-btn">Watch Trailer</div>
          </div>
          <ul className="pagination">
            <li
              className="arrow"
              data-direction="left"
              onClick={(e) => handleArrows(e.target.dataset.direction)}
            >
              ⬅
            </li>
            <li
              className={`page ${activeMovie === 1 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-1"
            >
              1
            </li>
            <li
              className={`page ${activeMovie === 2 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-2"
            >
              2
            </li>
            <li
              className={`page ${activeMovie === 3 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-3"
            >
              3
            </li>
            <li
              className={`page ${activeMovie === 4 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-4"
            >
              4
            </li>
            <li
              className={`page ${activeMovie === 5 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-5"
            >
              5
            </li>
            <li
              className="arrow"
              data-direction="right"
              onClick={(e) => handleArrows(e.target.dataset.direction)}
            >
              ➡
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
