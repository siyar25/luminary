import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";
import NewsPage from "./Pages/HomePage/NewsPage/NewsPage";
import AboutUsPage from "./Pages/HomePage/AboutUsPage/AboutUsPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
