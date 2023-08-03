import "./GridMovie.css";

export default function GridMovie({
  title,
  duration,
  genres,
  posterSrc,
  releaseDate,
  comingSoon
}) {
  const date = new Date().toLocaleDateString();
  const movieRelease = new Date(releaseDate);
  const options = { month: 'long', day: 'numeric' };
  
  return (
    <div className="grid-movie" tabIndex={0}>
      <div className="movie-poster-container">
        {comingSoon ? (
          <div className="movie-poster-infos">
            <div className="movie-poster-info">📅</div>
            <div className="movie-poster-info date">{releaseDate}</div>
          </div>
        ) : null}
        <img
          src={posterSrc}
          alt={`Poster of the movie ${title}`}
          className="movie-poster"
        ></img>
      </div>
      <div className="movie-title">{title}</div>
      <div className="movie-info">
        <div className="movie-duration">{duration}</div>
        <div className="split-line">|</div>
        <div className="movie-genres">{genres}</div>
      </div>
    </div>
  );
}
