import "./SchedulePage.css";
import scheduleImg from "../../assets/schedule-image.jpg";
import ScheduleMovie from "../../Components/ScheduleMovie/ScheduleMovie";

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <img
        alt="People watching cinema screen"
        src={scheduleImg}
        className="schedule-image"
      />

        <div className="subtitle">
          <div className="subtitle-text">Schedule</div>
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
        <div className="schedule-list">
          <ScheduleMovie />
        </div>
      </div>
  );
}
