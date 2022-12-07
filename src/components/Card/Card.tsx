import React, {FC} from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";
import classes from "./Card.jss.tsx";
import {IData, ITheme} from './Card.types';
interface IProps {
  data: IData
};

const Card:FC<IProps> = ({ data }) => {
  const theme = useTheme<ITheme>();
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
