import React from "react";
import Home from "./pages/Home/Home";
import MoviePoster from "./pages/MoviePoster/MoviePoster";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MoviePoster />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
