import React, { Component } from "react";
import styled from "styled-components";
import MoviesList from "../../component/MoviesList/MoviesList";
import movApi from "../../services/movieAPI";
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

export default class MoviesTrend extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      this.scroller();
    }
  }

  componentDidMount() {
    this.fetchPerDayTrending();
  }

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

  scroller = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    const { location } = this.props;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spiner />}

        <Title>Trending today</Title>
        {movies.length > 0 && (
          <MoviesList moviesList={movies} location={location} />
        )}
        {movies.length > 0 && !loading && (
          <Button type="button" onClickButton={this.fetchPerDayTrending}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
