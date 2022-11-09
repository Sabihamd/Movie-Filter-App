import axios from "axios";

const fetchMovies = () => {
  return axios.get("http://localhost:3001/movies");
  
};

export default fetchMovies;
