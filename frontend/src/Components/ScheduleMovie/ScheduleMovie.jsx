import "./ScheduleMovie.css";
import CalendarDay from "../CalendarDay/CalendarDay";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ScheduleMovie({
  title,
  duration,
  genres,
  posterSrc,
  rated,
  imdbRating,
  imdbId,
}) {
  const [activeDate, setActiveDate] = useState(
    new Date().toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
    })
  );
  const [activeDay, setActiveDay] = useState(
    new Date().toLocaleString("en-us", { weekday: "long" })
  );
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const weekArray = Array.from(Array(7).keys()).map((idx) => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay() + 1 + idx);
    return d;
  });

  function isActive(day, date) {
    setActiveDay(day);
    setActiveDate(`${date.month} ${date.day}`)
  }

  return (
    <div className="schedule-movie">
      <div className="movie-top">
        <Link to={`/movie/${imdbId}`}>
          <img className="movie-poster" src={posterSrc} tabIndex={0} />
        </Link>
        <div className="movie-top-info">
          <div className="movie-top-info-row">
            <div className="movie-top-info-title" tabIndex={0}>
              {title} <span style={{ fontWeight: "normal" }}>| {rated}</span>
            </div>
            <a
              className="movie-top-info-imdb"
              href={`https://www.imdb.com/title/${imdbId}`}
              target="blank"
            >
              IMDb {imdbRating}
            </a>
          </div>
          <div className="movie-info">
            <div className="movie-duration">{duration}</div>
            <div className="split-line">|</div>
            <div className="movie-genres">{genres}</div>
          </div>
          <div className="movie-top-schedule">
            {days.map((day) => {
              const dayNum = weekArray[days.indexOf(day)].getDate();
              const month = weekArray[days.indexOf(day)].toLocaleString(
                "en-us",
                { month: "long" }
              );
              return (
                <CalendarDay
                  day={day}
                  number={dayNum}
                  month={month}
                  isActive={isActive}
                  activeDay={activeDay}
                  key={day}
                />
              );
            })}
          </div>
          <div className="movie-top-arrows">
            <div className="movie-top-arrow" tabIndex={0}>
              ⬅
            </div>
            <div className="movie-top-arrow" tabIndex={0}>
              ➡
            </div>
          </div>
        </div>
      </div>
      <div className="movie-bottom">
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `17%` }}>
            2D
          </div>
          <Link
            className="movie-bottom-screening"
            tabIndex={0}
            style={{ marginRight: "13.4%" }}
            to={`/book/${imdbId}?time=12:00&type=2D&date=${activeDate}`}
          >
            12:00
          </Link>
          <Link
            className="movie-bottom-screening"
            tabIndex={0}
            style={{ marginRight: "12%" }}
            to={`/book/${imdbId}?time=15:15&type=2D&date=${activeDate}`}
          >
            15:15
          </Link>
          <Link
            className="movie-bottom-screening"
            tabIndex={0}
            style={{ marginRight: "30%" }}
            to={`/book/${imdbId}?time=17:15&type=2D&date=${activeDate}`}
          >
            17:15
          </Link>
          <Link className="movie-bottom-screening" tabIndex={0} to={`/book/${imdbId}?time=22:00&type=2D&date=${activeDate}`}>
            22:00
          </Link>
        </div>
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `35%` }}>
            3D
          </div>
          <Link className="movie-bottom-screening" tabIndex={0} to={`/book/${imdbId}?time=15:00&type=3D&date=${activeDate}`}>
            15:00
          </Link>
        </div>
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `48%` }}>
            IMAX 2D
          </div>
          <Link
            className="movie-bottom-screening"
            tabIndex={0}
            style={{ marginRight: `25%` }}
            to={`/book/${imdbId}?time=17:00&type=IMAX_2D&date=${activeDate}`}
          >
            17:00
          </Link>
          <Link className="movie-bottom-screening" tabIndex={0} to={`/book/${imdbId}?time=21:00&type=IMAX_2D&date=${activeDate}`}>
            21:00
          </Link>
        </div>
      </div>
    </div>
  );
}
