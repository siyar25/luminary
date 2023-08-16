import { useLocation, useParams } from "react-router-dom";
import movies from "../../assets/movies.json";
import "./MoviePage.css";
import ScheduleMovie from "../../Components/ScheduleMovie/ScheduleMovie";
import { useEffect, useState } from "react";

export default function MoviePage() {
  let { id } = useParams();
  const { pathname } = useLocation();
  const [movie, setMovie] = useState();

  useEffect(() => {
    let findMovie = movies.comingSoon.find((movie) => movie.imdbID === id);
    findMovie === undefined
      ? (findMovie = movies.opening.find((movie) => movie.imdbID === id))
      : null;

    setMovie(findMovie);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="movie-page">
      <iframe
        width="100%"
        height="100%"
        src={movie?.Trailer.url}
        title={movie?.Trailer.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="movie-page-trailer"
      ></iframe>

      <div className="movie-page-title">
        {movie?.Title} ({movie?.Released.slice(-4)})
      </div>
      <div className="section-line"></div>


      <ScheduleMovie
        title={movie?.Title}
        duration={movie?.Runtime}
        genres={movie?.Genre}
        posterSrc={movie?.Poster}
        rated={movie?.Rated}
        imdbRating={movie?.imdbRating}
        imdbId={movie?.imdbID}
      />

      <section className="movie-page-section">
        <div className="titles">
          <div className="title">Details</div>
          <div className="title">Plot</div>
        </div>
        <div className="section-line" />
        <div className="inner-sections">
          <div className="details">
            <div className="detail">
              <div className="detail-key">Country</div>
              <div className="detail-value">{movie?.Country}</div>
            </div>
            <div className="detail">
              <div className="detail-key">Language</div>
              <div className="detail-value">{movie?.Language}</div>
            </div>
            <div className="detail">
              <div className="detail-key">Release date</div>
              <div className="detail-value">{movie?.Released}</div>
            </div>
            <div className="detail">
              <div className="detail-key">Director</div>
              <div className="detail-value">{movie?.Director}</div>
            </div>
          </div>
          <div className="plot">{movie?.Plot}</div>
        </div>
      </section>

      <section className="movie-page-section">
        <div className="titles">
          <div className="title">Cast</div>
          <div className="title">Awards and Ratings</div>
        </div>
        <div className="section-line" />
        <div className="inner-sections">
          <div className="details">
            {movie?.Actors.split(", ").map((actor) => {
              return (
                <div className="detail" key={actor}>
                  <div className="detail-key">{actor.split(" ")[0]}</div>
                  <div className="detail-value">
                    {actor.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="details">
            <div className="detail">
              <div className="detail-key">Awards</div>
              <div className="detail-value">{movie?.Awards}</div>
            </div>
            {movie?.Ratings.map((rating) => {
              return (
                <div className="detail" key={rating.Source}>
                  <div className="detail-key">{rating.Source}</div>
                  <div className="detail-value">{rating.Value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
