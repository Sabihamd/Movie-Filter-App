import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";
import PropTypes from "prop-types";
import classes from "./Card.jss";

const Card = ({ data }) => {
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
};

Card.propTypes = {
  data: {
    Title: PropTypes.string,
    Year: PropTypes.string,
    Runtime: PropTypes.string,
    Image: PropTypes.string,
    Poster: PropTypes.string,
    Plot: PropTypes.string,
  },
};

Card.defaultProps = {
  data: {
    Title: "",
    Year: "",
    Runtime: "",
    Image: "",
    Poster: "",
    Plot: "",
  },
};

export default Card;
