import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.jss";
import { useTheme } from "react-jss";

export default function Card({ data }) {
  const theme = useTheme();
  const styles = classes({ theme });
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.link} to="/movie" state={{ data }}>
        <div key={data.Title} className={styles.cardData}>
          <p className={styles.title}>{data.Title}</p>
          <img src={data.Image} alt="Movie" height="300px" width="290px" />
        </div>
      </Link>
    </div>
  );
}
