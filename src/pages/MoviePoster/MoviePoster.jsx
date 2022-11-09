import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./MoviePoster.css";

export default function Movie() {
  const location = useLocation();
  const movie = location.state.data;
  return (
    <div className="mainDiv">
    <div className="movieContainer">
      {movie && <h1>{movie.Title}</h1>}
      <img src={movie.Poster} alt="poster" width="600px" height="300px" />
      <p>Movie Duration : {movie.Runtime}</p>
      <h3>Year of Publish: {movie.Year}</h3>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVaQsEiwC_f6ZIjbM6g_ckFYH83TJptxLrQ&usqp=CAU"
          alt="g0Back"
          width={40}
          height={30}
        ></img>
      </Link>
    </div>
    </div>
  );
}
