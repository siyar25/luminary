import "./GridMovie.css";

export default function GridMovie({
  title,
  duration,
  genres,
  posterSrc,
  releaseDate,
}) {
  const date = new Date().toLocaleDateString();
  const movieRelease = new Date(releaseDate);
  const options = { month: 'long', day: 'numeric' };
  
  return (
    <div className="grid-movie">
      <div className="movie-poster-container">
        {date < movieRelease.toLocaleDateString() ? (
          <div className="movie-poster-infos">
            <div className="movie-poster-info">📅</div>
            <div className="movie-poster-info date">{movieRelease.toLocaleDateString("En-en", options)}</div>
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
        <div className="movie-duration">{duration} min</div>
        <div className="split-line">|</div>
        <div className="movie-genres">{genres.join(", ")}</div>
      </div>
    </div>
  );
}
