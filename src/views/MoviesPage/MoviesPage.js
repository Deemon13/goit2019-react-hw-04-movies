import React, { Component } from "react";
import styled from "styled-components";
import getQueryString from "../../utils/getQueryString";
import movApi from "../../services/movieAPI";
import SearchBar from "../../component/Searchbar/Searchbar";
import MoviesList from "../../component/MoviesList/MoviesList";
import Spiner from "../../component/Loader/Loader";
import Notification from "../../component/Notification/Notification";
import Button from "../../component/Button/Button";

const Title = styled.h1`
  display: inline-block;
  margin-left: 5%;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 5rem;
`;

export default class Movies extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    searchdone: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { query } = getQueryString(this.props.location.search);
    if (query) {
      this.fetchMoviesByQuery(query);
      return;
    }
    this.fetchPerDayTrending();
  }

  fetchMoviesByQuery = (query) => {
    this.setState({ loading: true });
    movApi
      .fetchMovieByName(query)
      .then((movies) => this.setState({ movies, searchdone: true }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  fetchPerDayTrending = () => {
    const { page } = this.state;
    this.setState({ loading: true });
    movApi
      .fetchDayTrending(page)
      .then((movies) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...movies],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryString(prevProps.location.search);
    const { query: nextQuery } = getQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMoviesByQuery(nextQuery);
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error, searchdone } = this.state;
    const { location } = this.props;
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spiner />}
        {!searchdone ? (
          <Title>Trending today</Title>
        ) : (
          <Title>Search results</Title>
        )}
        {movies.length > 0 && (
          <MoviesList moviesList={movies} location={location} />
        )}
        {!searchdone && (
          <Button type="button" onClickButton={this.fetchPerDayTrending}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
