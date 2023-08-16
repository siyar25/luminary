import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";
import Footer from "./Components/Footer/Footer";
import NewsPage from "./Pages/NewsPage/NewsPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import BookingPage from "./Pages/BookingPage/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/book/:id" element={<BookingPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
