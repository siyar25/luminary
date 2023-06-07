import MainScreen from "./MainScreen/MainScreen";
import ComingMovies from "./ComingMovies/ComingMovies";
import "./HomePage.css"

export default function HomePage() {
  return (
    <div className="homePage">
      <MainScreen />
      <ComingMovies />
    </div>
  );
}
