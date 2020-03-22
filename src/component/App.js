import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import NotFound from "../views/NotFound/NotFound";

const App = () => (
  <Layout>
    <ul>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/movies">MoviesPage</Link>
      </li>
      {/* <li>
        <Link to="/movies/:movieId">MovieDetailsPage</Link>
      </li> */}
    </ul>

    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
