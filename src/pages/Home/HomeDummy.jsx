import React, { useEffect, useState } from "react";
import { from, filter } from "rxjs";
import observable from "../../fetcher/movieList";
import Card from "../../components/Card/Card";
import useFilter from "../../hooks/useFilter";
import { useTheme } from "react-jss";
import classes from "./Home.jss";

export default function HomeDummy() {
  const [collection, setCollection] = useState();
  const [filteredData, setFilteredData] = useState();
  const [userInput, setUserInput] = useState();
  const theme = useTheme();
  const styles = classes({ theme });

  useEffect(() => {
    const subscription = observable.subscribe({
      next: (res) => {
        setCollection(res.response);
        setFilteredData(res.response);
      },
      complete: () => {
        subscription.unsubscribe();
      },
    });
    return () => {
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    if (collection !== undefined) {
      const source = from(collection);
      const observableWithPipe = source.pipe(
        filter((movie) => Number(movie.Year) < 2010)
      );
      console.log("Movies released before 2010 are: ");
      const subscribe = observableWithPipe.subscribe((movie) =>
        console.log(movie.Title)
      );
    }
  }, [collection]);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
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
