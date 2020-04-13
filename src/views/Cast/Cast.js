import React, { Component } from "react";
import styled from "styled-components";
import movApi from "../../services/movieAPI";
import Notification from "../../component/Notification/Notification";
import Spiner from "../../component/Loader/Loader";
import CastItem from "../../component/CastItem/CastItem";

const List = styled.ul`
  min-width: 32rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const NotificationText = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

class Cast extends Component {
  state = {
    movieCast: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovieCast();
  }

  fetchMovieCast = () => {
    this.setState({ loading: true });
    const movieId = this.props.match.params.movieId;
    movApi
      .fetchMovieCast(movieId)
      .then((movie) => movie.cast)
      .then((movieCast) => this.setState({ movieCast }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { error, loading } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spiner />}

        <>
          {this.state.movieCast ? (
            <List>
              {this.state.movieCast.map(
                ({ id, name, character, profile_path }) => (
                  <CastItem
                    key={id}
                    avatar={profile_path}
                    name={name}
                    character={character}
                  />
                )
              )}
            </List>
          ) : (
            <NotificationText>
              There are no cast for this movie
            </NotificationText>
          )}
        </>
      </>
    );
  }
}

export default Cast;
