import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

import imageNotFound from "../../images/notFound.png";

const NotFound = () => (
  <div>
    <img src={imageNotFound} alt="cat detective" width="320" />
    <p>
      Что-то пошло не так. Лучше вернуться на{" "}
      <Link to={routes.home}>главную страницу</Link>.
    </p>
  </div>
);

export default NotFound;
