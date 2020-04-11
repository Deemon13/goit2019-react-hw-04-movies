import React, { Component } from "react";
import movApi from "../../services/movieAPI";

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    movApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  render() {
    return (
      <div>
        {this.state.movie && (
          <>
            <h1>{this.state.movie.title}</h1>
            <img
              alt={this.state.movie.title}
              src={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
            />
          </>
        )}
      </div>
    );
  }
}
