import React, { Component } from "react";
import styled from "styled-components";
import Notification from "../../component/Notification/Notification";
import Spiner from "../../component/Loader/Loader";
import movApi from "../../services/movieAPI";

const List = styled.ul`
  min-width: 32rem;
  width: 100%;
`;

const Title = styled.h2`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
  @media screen and (min-width: 48em) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

class Reviews extends Component {
  state = {
    movieReviews: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    return this.fetchMovieReviews(movieId);
  }

  fetchMovieReviews = (movieId) => {
    this.setState({ loading: true });
    movApi
      .fetchMovieReviews(movieId)
      .then((movieReviews) => this.setState({ movieReviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { movieReviews, error, loading } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spiner />}

        <div>
          {movieReviews && (
            <List>
              {movieReviews.map(({ id, author, content }) => (
                <li key={id}>
                  <Title>Author: {author}</Title>
                  <Text>'{content}'</Text>
                </li>
              ))}
            </List>
          )}
          {movieReviews && movieReviews.length === 0 && (
            <Text>We don't have any review for this moment</Text>
          )}
        </div>
      </>
    );
  }
}

export default Reviews;
