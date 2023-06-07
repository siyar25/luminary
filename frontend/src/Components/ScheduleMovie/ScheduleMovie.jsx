import "./ScheduleMovie.css"
import moviePoster from "../../assets/venom-movie-bg.jpg"

export default function ScheduleMovie() {
  return (
    <div className="schedule-movie">
      <div className="movie-top">
        <img className="movie-poster" src={moviePoster} />
        <div className="movie-top-info">
            <div className="movie-top-info-title">Venom <span>13+</span></div>
            <div className="movie-top-info-details">120 min | ACTION</div>
            <div className="movie-top-schedule">June 17</div>
            <div className="movie-top-arrows">⬅ ➡</div>
        </div>
      </div>
      <div className="movie-bottom">
        <div className="movie-bottom-row">
            <div className="movie-type">2D</div>
            <div className="movie-screening">12:00</div>
        </div>
      </div>
    </div>
  )
}
