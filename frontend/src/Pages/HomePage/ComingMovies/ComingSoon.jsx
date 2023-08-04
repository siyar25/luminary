import GridMovie from "../../../Components/GridMovie/GridMovie";
import movies from "../../../assets/movies.json";

export default function ComingSoon() {
  
  return (
    <section className="coming-movies-section">
      <div className="subtitle">
        <div className="subtitle-text">Coming Soon</div>
      </div>
      <div className="section-line"></div>
      <div className="coming-movies-grid">
      {movies.comingSoon.map((movie) => {
          return (
            <GridMovie
              title={movie.Title}
              duration={movie.Runtime}
              genres={movie.Genre}
              posterSrc={movie.Poster}
              releaseDate={movie.Released}
              comingSoon={true}
              key={movie.imdbID}
              imdbId={movie.imdbID}
            />
          );
        })}
      </div>
    </section>
  );
}
