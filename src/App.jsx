import React from "react";
import HomeDummy from "./pages/Home/HomeDummy";
import MoviePoster from "../src/pages/MoviePoster/MoviePoster";
import Sample from "../src/pages/Home/Sample";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDummy />} />
          <Route path="/movie" element={<MoviePoster />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
