import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ data }) {
  return (
    <div className="cardContainer">
      <Link to="/movie" state={{ data }}>
        <div key={data.Title} className="cardData">
          <p>{data.Title}</p>
          <img src={data.Poster} alt="poster" height="300px" width="290px" />
        </div>
      </Link>
    </div>
  );
}
