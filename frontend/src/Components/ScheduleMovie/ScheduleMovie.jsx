import "./ScheduleMovie.css";
import moviePoster from "../../assets/venom-movie-bg.jpg";
import CalendarDay from "../CalendarDay/CalendarDay";
import { useEffect, useRef, useState } from "react";

export default function ScheduleMovie() {
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

  function isActive(day) {
    setActiveDay(day);
  }

  return (
    <div className="schedule-movie">
      <div className="movie-top">
        <img className="movie-poster" src={moviePoster} />
        <div className="movie-top-info">
          <div className="movie-top-info-row">
            <div className="movie-top-info-title">
              Venom <span>13+</span>
            </div>
            <a className="movie-top-info-imdb" href="https://www.imdb.com" target="blank">IMDb 6.6</a>
          </div>
          <div className="movie-info">
            <div className="movie-duration">120 min</div>
            <div className="split-line">|</div>
            <div className="movie-genres">ACTION</div>
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
            <div className="movie-top-arrow">⬅</div>
            <div className="movie-top-arrow">➡</div>
          </div>
        </div>
      </div>
      <div className="movie-bottom">
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `17%` }}>
            2D
          </div>
          <div className="movie-bottom-screening">12:00</div>
        </div>
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `35%` }}>
            3D
          </div>
          <div className="movie-bottom-screening">15:00</div>
        </div>
        <div className="movie-bottom-row">
          <div className="movie-bottom-type" style={{ marginRight: `75%` }}>
            IMAX 3D
          </div>
          <div className="movie-bottom-screening">21:00</div>
        </div>
      </div>
    </div>
  );
}
