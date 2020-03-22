import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const myAPIkey = "9eab4199b01913b6a81b6702a89a7ff0";

const fetchDayTrending = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${myAPIkey}`)
    .then(res => {
      console.log(res);
    })
    .then(data => {
      console.log(data);
    });

  // .then(res => res.data)
  // .then(data => data.results);
};

const fetchMovieByName = movieName => {
  return axios
    .get(
      `${BASE_URL}/search/movie?query=${movieName}&api_key=${myAPIkey}&page=1`
    )
    .then(res => res.data)
    .then(data => data.results);
};

export default {
  fetchDayTrending,
  fetchMovieByName
};
