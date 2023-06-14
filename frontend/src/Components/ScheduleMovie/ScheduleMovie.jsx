import "./ScheduleMovie.css";
import moviePoster from "../../assets/venom-movie-bg.jpg";
import CalendarDay from "../CalendarDay/CalendarDay";
import { useEffect, useRef, useState } from "react";

export default function ScheduleMovie() {
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const today = new Date().toLocaleString('en-us', {weekday: 'long'})
    setActiveDay(today);
  }, [])

  function isActive(day) {
    setActiveDay(day)
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
            <div className="movie-top-info-imdb">IMDB 6.6</div>
          </div>
          <div className="movie-info">
            <div className="movie-duration">120 min</div>
            <div className="split-line">|</div>
            <div className="movie-genres">ACTION</div>
          </div>
          <div className="movie-top-schedule">
            <CalendarDay day={"Monday"} number={17} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Tuesday"} number={18} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Wednesday"} number={19} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Thursday"} number={20} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Friday"} number={21} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Saturday"} number={22} month={"Feb"} isActive={isActive} activeDay={activeDay}/>
            <CalendarDay day={"Sunday"} number={23} month={"Feb"} isActive={isActive} activeDay={activeDay}/>

          </div>
          <div className="movie-top-arrows">
            <div className="movie-top-arrow">⬅</div>
            <div className="movie-top-arrow">➡</div>
          </div>
        </div>
      </div>
      <div className="movie-bottom">
        <div className="movie-bottom-row">
          <div className="movie-bottom-type">2D</div>
          <div className="movie-bottom-screening">12:00</div>
        </div>
        <div className="movie-bottom-row">
          <div className="movie-bottom-type">3D</div>
          <div className="movie-bottom-screening">15:00</div>
        </div>
      </div>
    </div>
  );
}
