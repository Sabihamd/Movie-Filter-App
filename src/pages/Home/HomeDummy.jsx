import React, { useEffect, useState } from "react";
import observable$ from "../../fetcher/movieList";
import Card from "../../components/Card/Card";
import useFilter from "../../hooks/useFilter";
import { useTheme } from "react-jss";
import classes from "./Home.jss";
import axios from "axios";

export default function HomeDummy() {
  const [collection, setCollection] = useState();
  const [filteredData, setFilteredData] = useState();
  const theme = useTheme();
  const styles = classes({ theme });

  let userInput = " ";

  useEffect(() => {
    let subscription = observable$.subscribe({
      next: (data) => {
        setCollection(data.data);
        setFilteredData(data.data);
      },
      complete: (data) => {
        subscription.unsubscribe();
      },
    });
  }, []);

  const handleSearch = (e) => {
    userInput = e.target.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filterResults = useFilter(userInput, collection);
    setFilteredData(filterResults);
  };

  return (
    <div className={styles.home}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(e) => handleSearch(e)}
        placeholder="Search your Movies.."
      />
      <div className={styles.movies}>
        <div className={styles.gridContainer}>
          {filteredData &&
            filteredData.map((res, index) => <Card key={index} data={res} />)}
        </div>
      </div>
    </div>
  );
}
