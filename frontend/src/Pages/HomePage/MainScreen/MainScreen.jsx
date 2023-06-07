import NavBar from "../../../Components/NavBar/NavBar";
import movieBG from "../../../assets/venom-movie-bg.jpg";
import moonKnighBG from "../../../assets/moonknight-bg.jpg";
import venomLogo from "../../../assets/Venom-Logo.png";
import fbIcon from "../../../assets/social-media/facebook-icon.png";
import twitterIcon from "../../../assets/social-media/twitter-icon.png";
import instagramIcon from "../../../assets/social-media/instagram-icon.png";
import "./MainScreen.css";
import TrailerModal from "../../../Components/TrailerModal/TrailerModal";

export default function MainScreen() {
  function handleTrailer() {
    const trailerModal = document.getElementById("trailer-modal");
    trailerModal.showModal();
  }

  return (
    <div className="container">
      <TrailerModal />

      <img alt="movie-poster" src={movieBG} className="mainscreen-bg" />
      <div className="movie-container">
        <div className="left-side">
          <img className="movie-title-logo" src={venomLogo} />
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
            <li className="arrow">⬅</li>
            <li className="page">1</li>
            <li className="page active">2</li>
            <li className="page">3</li>
            <li className="page">4</li>
            <li className="page">5</li>
            <li className="arrow">➡</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
