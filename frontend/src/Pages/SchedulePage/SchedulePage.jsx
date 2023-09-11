import "./SchedulePage.css";
import scheduleImg from "../../assets/schedule-image.jpg";
import ScheduleMovie from "../../Components/ScheduleMovie/ScheduleMovie";
import movies from "../../assets/movies.json";

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <img
        alt="People watching cinema screen"
        src={scheduleImg}
        className="cover-image"
      />

      <div className="subtitle">
        <div className="subtitle-text" style={{ fontSize: "xx-large" }}>
          Schedule
        </div>
        <input
          className="opening-week-search"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="section-line"></div>
      <ul className="coming-movies-types">
        <li className="movie-type" tabIndex={0}>All films</li>
        <li className="movie-type" tabIndex={0}>2D</li>
        <li className="movie-type" tabIndex={0}>3D</li>
        <li className="movie-type" tabIndex={0}>IMAX</li>
        <li className="movie-type" tabIndex={0}>IMAX 3D</li>
      </ul>
      <div className="schedule-list">
        {movies.opening.map((movie) => {
          return (
            <>
              <ScheduleMovie
                title={movie.Title}
                duration={movie.Runtime}
                genres={movie.Genre}
                posterSrc={movie.Poster}
                rated={movie.Rated}
                imdbRating={movie.imdbRating}
                imdbId={movie.imdbID}
              />
              <div className="section-line" />
            </>
          );
        })}
      </div>
    </div>
  );
}
