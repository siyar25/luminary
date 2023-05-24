import "./GridMovie.css";

export default function GridMovie({ title, duration, genres, posterSrc }) {
  return (
    <div className="grid-movie">
      <img
        src={posterSrc}
        alt={`Poster of the movie ${title}`}
        className="movie-poster"
      />
      <div className="movie-title">{title}</div>
      <div className="movie-info">
        <div className="movie-duration">{duration} min</div>
        <div className="split-line">|</div>
        <div className="movie-genres">{genres.join(", ")}</div>
      </div>
    </div>
  );
}
