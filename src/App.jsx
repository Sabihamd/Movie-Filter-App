import React from "react";
import HomeDummy from "./pages/Home/HomeDummy";
import MoviePoster from "../src/pages/MoviePoster/MoviePoster";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDummy />} />
          <Route path="/movie" element={<MoviePoster />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
