import React from "react";
import MainScreen from "./MainScreen/MainScreen";
import ComingMovies from "./ComingMovies/ComingMovies";
import "./HomePage.css"

export default function HomePage() {
  return (
    <>
      <MainScreen />
      <ComingMovies />
    </>
  );
}
