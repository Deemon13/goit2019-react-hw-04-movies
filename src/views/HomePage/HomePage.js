import React, { Component } from "react";
import { Link } from "react-router-dom";
import movApi from "../../services/movieAPI";

export default class Homepage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    movApi.fetchMovieByName("anal").then(movies => this.setState({ movies }));
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
                <Link to={`${this.props.match.url}/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
