import React from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "./MoviePoster.jss";
import { useTheme } from "react-jss";

export default function Movie() {
  const location = useLocation();
  const theme = useTheme();
  const styles = classes({ theme });
  const movie = location.state.data;
  return (
    <div className={styles.mainDiv}>
      <div className={styles.movieContainer}>
        {movie && <h1 className={styles.title}>{movie.Title}</h1>}
        <img
          classname={styles.poster}
          src={movie.Poster}
          alt="Poster"
          width="600px"
          height="300px"
        />
        <h3 className={styles.details}>
          {" "}
          <b>Movie Duration:</b> {movie.Runtime}
        </h3>
        <h3 className={styles.details}>
          <b>Year of Publish:</b> {movie.Year}
        </h3>
        <h3 className={styles.details}>
          <b>Movie Plot:</b> <span>{movie.Plot}</span>
        </h3>
        <Link to="/">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-back-4079520-3383216.png"
            alt="goBack"
            width={45}
            height={45}
          ></img>
        </Link>
      </div>
    </div>
  );
}
