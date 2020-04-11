import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import routes from "../routes";
import NotFound from "../views/NotFound/NotFound";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={Homepage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
