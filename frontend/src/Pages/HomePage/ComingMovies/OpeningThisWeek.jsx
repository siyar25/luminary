import GridMovie from "../../../Components/GridMovie/GridMovie";
import movies from "../../../assets/movies.json";

export default function OpeningThisWeek() {

  return (
    <section className="coming-movies-section">
      <div className="subtitle">
        <div className="subtitle-text">Opening this week</div>
        <input
          className="opening-week-search"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="section-line"></div>
      <ul className="coming-movies-types">
        <li className="movie-type">All films</li>
        <li className="movie-type">2D</li>
        <li className="movie-type">3D</li>
        <li className="movie-type">IMAX</li>
        <li className="movie-type">IMAX 3D</li>
      </ul>
      <div className="coming-movies-grid">
        {movies.opening.map((movie) => {
          return (
            <GridMovie
              title={movie.Title}
              duration={movie.Runtime}
              genres={movie.Genre}
              posterSrc={movie.Poster}
              key={movie.imdbID}
            />
          );
        })}
      </div>
    </section>
  );
}
