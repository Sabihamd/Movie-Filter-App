import React, { useEffect, useState, useRef } from "react";
import { from, filter, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import axios from "axios";
import Card from "../../components/Card/Card.tsx";
import useFilter from "../../hooks/useFilter";
import { useTheme } from "react-jss";
import classes from "./Home.jss";

const HomeDummy = () => {
  const [collection, setCollection] = useState();
  const [filteredData, setFilteredData] = useState();
  const [userInput, setUserInput] = useState();
  const theme = useTheme();
  const styles = classes({ theme });
  const searchBar = useRef();
  const focusSearchBar = () => {
    searchBar.current.focus();
    // console.log(searchBar);
  };
  useEffect(() => {
    const subscription = new Observable((observer) => {
      axios
        .get("http://localhost:3001/movies")
        .then((res) => {
          observer.next(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }).subscribe((data) => {
      setCollection(data);
      setFilteredData(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (collection !== undefined) {
      const source = from(collection);

      const observableWithFilter = source.pipe(
        filter((movie) => Number(movie.Year) < 2010)
      );
      console.log(
        "%cMovies released before 2010 are: (using filter)",
        "color: blue"
      );
      const subscribe = observableWithFilter.subscribe((movie) =>
        console.log(movie.Title)
      );

      console.log("%cList of lead actors: (using map/tap)", "color: blue");
      const observableWithTap = source.pipe(
        map(({ Actors, Title }) => Title + "\n" + Actors),
        tap(
          () => {
            console.log("%con next", "color: orange");
          },
          (error) => {
            console.log("%con error", "color: red", error.message);
          },
          () => {
            console.log("%con complete", "color: green");
          }
        )
      );
      const subscribeTap = observableWithTap.subscribe((details) =>
        console.log(details)
      );
      return () => {
        subscribe.unsubscribe();
        subscribeTap.unsubscribe();
      };
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
      <div className={styles.flexItem}>
        <input
          className={styles.searchInput}
          type="text"
          onChange={(e) => handleSearch(e)}
          placeholder="Search your Movies.."
          ref={searchBar}
        />
        <button onClick={focusSearchBar}>Focus Search Bar</button>
      </div>
      <div className={styles.movies}>
        <div className={styles.gridContainer}>
          {filteredData &&
            filteredData.map((res, index) => <Card key={index} data={res} />)}
        </div>
      </div>
    </div>
  );
};

export default HomeDummy;
