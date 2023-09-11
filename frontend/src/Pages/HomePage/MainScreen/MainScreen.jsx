import movieBG from "../../../assets/venom-movie-bg.jpg";
import screen2 from "../../../assets/posters/screen-2.jpg";
import screen3 from "../../../assets/posters/screen-3.jpg";
import screen4 from "../../../assets/posters/screen-4.jpg";
import screen5 from "../../../assets/posters/screen-5.jpg";
import venomLogo from "../../../assets/Venom-Logo.png";
import avengersLogo from "../../../assets/posters/titles/avengers-title.png";
import inceptionLogo from "../../../assets/posters/titles/inception-title.png";
import walleLogo from "../../../assets/posters/titles/wall-e-title.png";
import pulpFictionLogo from "../../../assets/posters/titles/pulp-fiction-title.png";
import fbIcon from "../../../assets/social-media/facebook-icon.png";
import twitterIcon from "../../../assets/social-media/twitter-icon.png";
import instagramIcon from "../../../assets/social-media/instagram-icon.png";
import "./MainScreen.css";
import TrailerModal from "../../../Components/TrailerModal/TrailerModal";
import movies from "../../../assets/movies.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainScreen() {
  const [activeMovie, setActiveMovie] = useState(1);
  const [activeImdbId, setActiveImdbId] = useState();

  useEffect(() => {
    setActiveImdbId(
      activeMovie === 1
        ? venom.imdbID
        : activeMovie === 2
        ? avengers.imdbID
        : activeMovie === 3
        ? inception.imdbID
        : activeMovie === 4
        ? wallE.imdbID
        : pulpFiction.imdbID
    );
  }, [activeMovie]);

  const today = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const todayNoYear = new Date().toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
  });
  const venom = movies.opening[0];
  const avengers = movies.opening[1];
  const inception = movies.opening[6];
  const wallE = movies.opening[4];
  const pulpFiction = movies.opening[3];

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
      <TrailerModal
        movie={
          activeMovie === 1
            ? venom
            : activeMovie === 2
            ? avengers
            : activeMovie === 3
            ? inception
            : activeMovie === 4
            ? wallE
            : pulpFiction
        }
      />
      <div className="slides">
        <div
          id="slide-1"
          className={`fade-in-out ${activeMovie === 1 ? "active" : ""}`}
        >
          <img alt="movie-poster" src={movieBG} className="mainscreen-bg" />
        </div>
        <div
          id="slide-2"
          className={`fade-in-out ${activeMovie === 2 ? "active" : ""}`}
        >
          <img alt="movie-poster" src={screen2} className="mainscreen-bg" />
        </div>
        <div
          id="slide-3"
          className={`fade-in-out ${activeMovie === 3 ? "active" : ""}`}
        >
          <img alt="movie-poster" src={screen3} className="mainscreen-bg" />
        </div>
        <div
          id="slide-4"
          className={`fade-in-out ${activeMovie === 4 ? "active" : ""}`}
        >
          <img alt="movie-poster" src={screen4} className="mainscreen-bg" />
        </div>
        <div
          id="slide-5"
          className={`fade-in-out ${activeMovie === 5 ? "active" : ""}`}
        >
          <img alt="movie-poster" src={screen5} className="mainscreen-bg" />
        </div>
      </div>
      <div className="movie-container">
        <div className="left-side">
          <div className="movie-title-logo-div">
            {activeMovie === 1 ? (
              <img className="movie-title-logo" src={venomLogo} />
            ) : activeMovie === 2 ? (
              <img className="movie-title-logo" src={avengersLogo} />
            ) : activeMovie === 3 ? (
              <img className="movie-title-logo" src={inceptionLogo} />
            ) : activeMovie === 4 ? (
              <img className="movie-title-logo" src={walleLogo} />
            ) : (
              <img className="movie-title-logo" src={pulpFictionLogo} />
            )}
          </div>
          <div className="booking">
            <Link
              className="book-now-btn"
              tabIndex={0}
              to={`/book/${activeImdbId}?time=17:00&type=IMAX_2D&date=${todayNoYear}`}
            >
              Book Now
            </Link>
            <div className="book-now-info">
              <div className="book-now-date">{today} 17:00</div>
              <div className="book-now-movietype">IMAX 2D</div>
            </div>
          </div>
          <div className="social-media">
            <img
              alt="facebook icon"
              src={fbIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <img
              alt="twitter icon"
              src={twitterIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.twitter.com", "_blank")}
            />
            <img
              alt="instagram icon"
              src={instagramIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.instagram.com", "_blank")}
            />
          </div>
        </div>
        <div className="right-side">
          <div className="play-trailer">
            <div
              className="play-button"
              onClick={() => handleTrailer()}
              tabIndex={0}
            >
              ▶
            </div>
            <div className="trailer-btn">Watch Trailer</div>
          </div>
          <ul className="pagination">
            <li
              className="arrow"
              data-direction="left"
              onClick={(e) => handleArrows(e.target.dataset.direction)}
              tabIndex={0}
            >
              ⬅
            </li>
            <li
              className={`page ${activeMovie === 1 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-1"
              tabIndex={0}
            >
              1
            </li>
            <li
              className={`page ${activeMovie === 2 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-2"
              tabIndex={0}
            >
              2
            </li>
            <li
              className={`page ${activeMovie === 3 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-3"
              tabIndex={0}
            >
              3
            </li>
            <li
              className={`page ${activeMovie === 4 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-4"
              tabIndex={0}
            >
              4
            </li>
            <li
              className={`page ${activeMovie === 5 ? "active" : ""}`}
              onClick={(e) => handlePagination(e)}
              id="screen-5"
              tabIndex={0}
            >
              5
            </li>
            <li
              className="arrow"
              data-direction="right"
              onClick={(e) => handleArrows(e.target.dataset.direction)}
              tabIndex={0}
            >
              ➡
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
