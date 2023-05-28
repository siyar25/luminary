import "./ComingMovies.css";
import ComingSoon from "./ComingSoon";
import OpeningThisWeek from "./OpeningThisWeek";

export default function ComingMovies() {
  return (
    <div className="movies-container">
      <OpeningThisWeek />
      <ComingSoon />
    </div>
  );
}
