import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryString from "../../utils/getQueryString";
import movApi from "../../services/movieAPI";
import SearchBar from "../../component/Searchbar/Searchbar";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryString(this.props.location.search);
    if (query) {
      movApi
        .fetchMovieByName(query)
        .then((movies) => this.setState({ movies }));
      return;
    }
    movApi.fetchDayTrending().then((movies) => this.setState({ movies }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryString(prevProps.location.search);
    const { query: nextQuery } = getQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      movApi
        .fetchMovieByName(nextQuery)
        .then((movies) => this.setState({ movies }));
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />

        <h1>Movies Page</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
