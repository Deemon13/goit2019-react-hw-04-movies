import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NoImageAvailable from "../../images/NoImageAvailable.png";

const Container = styled.div`
  min-width: 10rem;
  margin: 0 auto;
`;

const ContainerMovie = styled.div`
  min-width: 30rem;
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 64em) {
    flex-direction: column;
  }
`;

const Poster = styled.img.attrs(({ src, alt }) => ({
  src: src ? `http://image.tmdb.org/t/p/w500${src}` : `${NoImageAvailable}`,

  alt: `Poster of ${alt}` || "Poster",
}))`
  width: 20rem;
`;

const ContainerMovieDetails = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 64em) {
    margin-left: 2rem;
  }
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 500;
  @media screen and (min-width: 30em) {
    font-size: 2.6rem;
  }
`;

const TitleOverview = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
  @media screen and (min-width: 48em) {
    font-size: 2.4rem;
  }
`;

const TitleGenres = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;

const ButtonGoBack = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

const MovieDetails = ({ movie, onButtonGoBack }) => (
  <Container>
    <ButtonGoBack type="button" onClick={onButtonGoBack}>
      Go back
    </ButtonGoBack>
    <ContainerMovie>
      <Poster src={movie.poster_path} alt={movie.title} />
      <ContainerMovieDetails>
        <Title>{movie.title}</Title>
        <Text>User score: {movie.vote_average * 10 + "%"}</Text>
        <TitleOverview>Overview</TitleOverview>
        <Text>{movie.overview}</Text>
        <TitleGenres>Genres</TitleGenres>
        <Text>{movie.genres.map((genre) => genre.name).join(" ")}</Text>
      </ContainerMovieDetails>
    </ContainerMovie>
  </Container>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  onButtonGoBack: PropTypes.func.isRequired,
};

export default MovieDetails;
