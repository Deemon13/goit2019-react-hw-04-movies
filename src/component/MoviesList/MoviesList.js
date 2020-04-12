import React from "react";
import styled from "styled-components";
import MoviesListItem from "../MoviesList/MoviesListItem";

const List = styled.ul`
  min-width: 32rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 48em) {
    justify-content: space-evenly;
  }
`;

function MoviesList({ moviesList, location }) {
  return (
    <List>
      {moviesList.map(({ id, title, poster_path }) => (
        <MoviesListItem
          key={id}
          id={id}
          title={title}
          poster={poster_path}
          location={location}
        />
      ))}
    </List>
  );
}

export default MoviesList;
