import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import useFilter from "../../hooks/useFilter";
import fetchMovies from "../../fetcher/movieList";
import { useQuery } from "react-query";

export default function Home() {
  const [collection, setCollection] = useState();
  const [filteredData, setFilteredData] = useState();

  let userInput = " ";
  const { isLoading, isError, error, data } = useQuery("movies", fetchMovies);

  useEffect(() => {
    if (data) {
      setCollection(data.data);
      setFilteredData(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error is {error}</div>;
  }

  const handleSearch = (e) => {
    userInput = e.target.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filterResults = useFilter(userInput, collection);
    setFilteredData(filterResults);
  };

  return (
    <div className="home">
      <input
        className="searchInput"
        type="text"
        onChange={(e) => handleSearch(e)}
        placeholder="Search your Movies.."
      />
      <div className="movies">
        <div className="gridContainer">
          {filteredData &&
            filteredData.map((res, index) => <Card key={index} data={res} />)}
        </div>
      </div>
    </div>
  );
}
