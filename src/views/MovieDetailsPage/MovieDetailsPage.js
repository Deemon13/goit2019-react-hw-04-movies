import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import movApi from "../../services/movieAPI";
import routes from "../../routes";
import MovieDetails from "./MovieDetails.js";
import NavigationCastReviews from "../../component/Navigation/NavigationCastReviews";
import Spiner from "../../component/Loader/Loader";
import Notification from "../../component/Notification/Notification";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default class MovieDetailsPage extends Component {
  state = { movies: null, loading: false, error: null, realState: null };

  componentDidMount() {
    const {
      location: { state },
    } = this.props;
    this.setState({ loading: true });
    const { match } = this.props;
    movApi
      .fetchMovieDetails(match.params.movieId)
      .then((result) => {
        this.setState({
          movies: result,
          realState: state,
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { realState } = this.state;
    if (realState && realState.from) {
      return history.push(realState.from);
    }
    history.push(routes.movies);
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
            <Suspense fallback={<Spiner />}>
              <Switch>
                <Route path={`${match.path}/cast`} component={Cast}></Route> />
                <Route
                  path={`${match.path}/reviews`}
                  component={Reviews}
                ></Route>
              </Switch>
            </Suspense>
          </div>
        )}
      </main>
    );
  }
}
