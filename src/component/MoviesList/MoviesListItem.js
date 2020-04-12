import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../routes";
import PropTypes from "prop-types";
import NoImageAvailable from "../../images/NoImageAvailable.png";

const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  border-radius: 10px;
  margin-bottom: 3rem;
  @media screen and (min-width: 48em) {
    flex-basis: 40%;
    margin-right: 10px;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 64em) {
    flex-basis: 21%;
    margin-right: 0;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 90em) {
    flex-basis: 18%;
  }
  @media screen and (min-width: 105em) {
    flex-basis: 17%;
  }
`;

const MoviePoster = styled.img.attrs(({ src, alt }) => ({
  src: src ? `http://image.tmdb.org/t/p/w500${src}` : `${NoImageAvailable}`,

  alt: `Poster of ${alt}` || "Poster",
}))`
  object-fit: cover;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.75);
  }
`;

function MoviesListItem({ id, title, poster, location }) {
  return (
    <ItemWrapper>
      <li>
        <Link
          to={{
            pathname: `${routes.movies}/${id}`,
            state: { from: location },
          }}
        >
          <MoviePoster src={poster} alt={title} />
        </Link>
      </li>
    </ItemWrapper>
  );
}

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  location: PropTypes.object,
};

MoviesListItem.defaultProps = {
  poster: `${NoImageAvailable}`,
};

export default MoviesListItem;
