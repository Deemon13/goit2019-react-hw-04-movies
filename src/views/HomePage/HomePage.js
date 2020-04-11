import React, { Component } from "react";
import { Link } from "react-router-dom";
import movApi from "../../services/movieAPI";

export default class MoviesTrend extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    movApi.fetchDayTrending().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
