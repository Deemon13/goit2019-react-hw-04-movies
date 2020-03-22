import React from "react";

const MovieDetailsPage = ({ match }) => (
  <div>
    <h1>MovieDetailsPage of {match.params.movieId}</h1>
    <p>This is the page of {match.params.movieId}</p>
  </div>
);

export default MovieDetailsPage;
