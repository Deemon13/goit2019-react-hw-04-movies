import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import movApi from "../../services/movieAPI";
import routes from "../../routes";
import MovieDetails from "./MovieDetails.js";
import NavigationCastReviews from "../../component/Navigation/NavigationCastReviews";
import Spiner from "../../component/Loader/Loader";
import Notification from "../../component/Notification/Notification";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

export default class MovieDetailsPage extends Component {
  state = { movies: null, loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });
    movApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const { movies, loading, error } = this.state;
    const { match } = this.props;
    return (
      <main>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spiner />}
        {movies && (
          <div>
            <MovieDetails movie={movies} onButtonGoBack={this.handleGoBack} />
            <NavigationCastReviews
              castMatch={`${match.url}/cast`}
              reviewMatch={`${match.url}/reviews`}
            />
            <Switch>
              <Route path={`${match.path}/cast`} component={Cast}></Route> />
              <Route path={`${match.path}/reviews`} component={Reviews}></Route>
            </Switch>
          </div>
        )}
      </main>
    );
  }
}
