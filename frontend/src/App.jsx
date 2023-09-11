import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import { Suspense, lazy } from "react";
import Loading from "./Components/Loading/Loading";

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const SchedulePage = lazy(() => import('./Pages/SchedulePage/SchedulePage'));
const NewsPage = lazy(() => import('./Pages/NewsPage/NewsPage'));
const AboutUsPage = lazy(() => import('./Pages/AboutUsPage/AboutUsPage'));
const MoviePage = lazy(() => import('./Pages/MoviePage/MoviePage'));
const BookingPage = lazy(() => import('./Pages/BookingPage/BookingPage'));


function App() {
  return (
      <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
