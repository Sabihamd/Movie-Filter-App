import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";
import classes from "./Card.jss.tsx";

type Props = {
  data: {
    Actors: string,
    Image: string,
    Plot: string,
    Poster: string,
    Runtime: string,
    Title: string,
    Year: string,
  },
};

type Theme ={
  color: string,
  backgroundColor: string
}

const Card = ({ data }: Props) => {
  const theme = useTheme<Theme>();
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

// Card.propTypes = {
//   data: PropTypes.shape({
//     Title: PropTypes.string,
//     Year: PropTypes.string,
//     Runtime: PropTypes.string,
//     Image: PropTypes.string,
//     Poster: PropTypes.string,
//     Plot: PropTypes.string,
//     Actors: PropTypes.string,
//   }),
// };

Card.defaultProps = {
  data: {
    Title: "",
    Year: "",
    Runtime: "",
    Image: "",
    Poster: "",
    Plot: "",
    Actors: "",
  },
};

export default Card;
